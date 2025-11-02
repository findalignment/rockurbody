import base from '../config/airtable';
import logger from '../utils/logger';

// Session tracking service
export class SessionService {
  
  // Create a new session package purchase
  static async createSessionPackage(userId, packageType, totalSessions, amount) {
    try {
      const record = await base('Session Packages').create([
        {
          fields: {
            'User ID': userId,
            'Package Type': packageType,
            'Total Sessions': totalSessions,
            'Sessions Used': 0,
            'Sessions Remaining': totalSessions,
            'Amount Paid': amount,
            'Purchase Date': new Date().toISOString(),
            'Status': 'Active',
            'Cal.com Link': this.generateCalLink(packageType)
          }
        }
      ]);
      
      return record[0].id;
    } catch (error) {
      logger.error('Error creating session package:', error);
      throw error;
    }
  }

  // Get user's session packages
  static async getUserSessionPackages(userId) {
    try {
      const records = await base('Session Packages')
        .select({
          filterByFormula: `{User ID} = '${userId}'`,
          sort: [{ field: 'Purchase Date', direction: 'desc' }]
        })
        .all();
      
      return records.map(record => ({
        id: record.id,
        ...record.fields
      }));
    } catch (error) {
      logger.error('Error fetching session packages:', error);
      throw error;
    }
  }

  // Mark a session as used
  static async useSession(packageId, sessionDate, sessionType) {
    try {
      // Get current package
      const packageRecord = await base('Session Packages').find(packageId);
      const currentUsed = packageRecord.fields['Sessions Used'] || 0;
      const totalSessions = packageRecord.fields['Total Sessions'];
      
      if (currentUsed >= totalSessions) {
        throw new Error('No sessions remaining in this package');
      }

      // Update package
      await base('Session Packages').update([
        {
          id: packageId,
          fields: {
            'Sessions Used': currentUsed + 1,
            'Sessions Remaining': totalSessions - (currentUsed + 1),
            'Status': (currentUsed + 1 >= totalSessions) ? 'Completed' : 'Active'
          }
        }
      ]);

      // Create session record
      const sessionRecord = await base('Sessions').create([
        {
          fields: {
            'Package ID': packageId,
            'User ID': packageRecord.fields['User ID'],
            'Session Date': sessionDate,
            'Session Type': sessionType,
            'Status': 'Completed'
          }
        }
      ]);

      return sessionRecord[0].id;
    } catch (error) {
      logger.error('Error using session:', error);
      throw error;
    }
  }

  // Get user's session history
  static async getUserSessions(userId) {
    try {
      const records = await base('Sessions')
        .select({
          filterByFormula: `{User ID} = '${userId}'`,
          sort: [{ field: 'Session Date', direction: 'desc' }]
        })
        .all();
      
      return records.map(record => ({
        id: record.id,
        ...record.fields
      }));
    } catch (error) {
      logger.error('Error fetching sessions:', error);
      throw error;
    }
  }

  // Generate Cal.com booking link based on session type
  static generateCalLink(sessionType) {
    const baseUrl = 'https://cal.com/rockhudson';
    
    // Map session types to your Cal.com event names
    const sessionMap = {
      'consult': 'consult',
      'move30': 'move30',
      'move60': 'move60', 
      'move90': 'move90',
      'move120': 'move120',
      'si60': 'si60',
      'si90': 'si90',
      'si120': 'si120'
    };
    
    return `${baseUrl}/${sessionMap[sessionType] || 'consult'}`;
  }

  // Get package configurations
  static getPackageConfigurations() {
    return {
      'The Reset': {
        name: 'The Reset',
        price: 990,
        sessions: [
          { type: 'move60', count: 3 },
          { type: 'si60', count: 3 }
        ],
        description: '3 Movement (60min) + 3 SI (60min) sessions'
      },
      'Hip Freedom - Basic': {
        name: 'Hip Freedom - Basic',
        price: 1320,
        sessions: [
          { type: 'si60', count: 4 },
          { type: 'move60', count: 4 }
        ],
        description: '4 SI (60min) + 4 Movement (60min) sessions'
      },
      'Hip Freedom - Extended': {
        name: 'Hip Freedom - Extended', 
        price: 1920,
        sessions: [
          { type: 'si60', count: 4 },
          { type: 'move60', count: 8 }
        ],
        description: '4 SI (60min) + 8 Movement (60min) sessions'
      },
      'Full Repatterning - Basic': {
        name: 'Full Repatterning - Basic',
        price: 3720,
        sessions: [
          { type: 'si60', count: 12 },
          { type: 'move60', count: 12 }
        ],
        description: '12 SI (60min) + 12 Movement (60min) sessions'
      },
      'Full Repatterning - Extended': {
        name: 'Full Repatterning - Extended',
        price: 5400,
        sessions: [
          { type: 'si60', count: 12 },
          { type: 'move60', count: 24 }
        ],
        description: '12 SI (60min) + 24 Movement (60min) sessions'
      },
      'Full Repatterning - Premium': {
        name: 'Full Repatterning - Premium',
        price: 5400,
        sessions: [
          { type: 'si120', count: 12 },
          { type: 'move60', count: 12 }
        ],
        description: '12 SI (120min) + 12 Movement (60min) sessions'
      },
      'Full Repatterning - Ultimate': {
        name: 'Full Repatterning - Ultimate',
        price: 7200,
        sessions: [
          { type: 'si120', count: 12 },
          { type: 'move60', count: 24 }
        ],
        description: '12 SI (120min) + 24 Movement (60min) sessions'
      }
    };
  }

  // Get available session types for a package
  static getAvailableSessionTypes(packageType) {
    const configs = this.getPackageConfigurations();
    const config = configs[packageType];
    
    if (!config) return [];
    
    // Get unique session types from the package
    const sessionTypes = [...new Set(config.sessions.map(s => s.type))];
    
    // Map to display names
    const displayNames = {
      'consult': 'Consultation',
      'move30': 'Movement 30min',
      'move60': 'Movement 60min',
      'move90': 'Movement 90min', 
      'move120': 'Movement 120min',
      'si60': 'SI 60min',
      'si90': 'SI 90min',
      'si120': 'SI 120min'
    };
    
    return sessionTypes.map(type => ({
      type,
      displayName: displayNames[type] || type
    }));
  }

  // Check if user has available sessions
  static async hasAvailableSessions(userId) {
    try {
      const packages = await this.getUserSessionPackages(userId);
      return packages.some(pkg => pkg['Sessions Remaining'] > 0);
    } catch (error) {
      logger.error('Error checking available sessions:', error);
      return false;
    }
  }
}
