/**
 * Notification model type definition
 *
 * Represents a notification entity in the system.
 * Based on the notification structure from PagesPage.tsx lines 122-127.
 */
export interface Notification {
  /** Unique identifier for the notification */
  id: number;

  /** Type of notification affecting display style */
  type: 'info' | 'success' | 'warning' | 'error';

  /** Notification title/heading */
  title: string;

  /** Detailed notification message */
  message: string;

  /** Relative time string (e.g., "2時間前") */
  time: string;

  /** Whether the notification has been read by the user */
  read: boolean;
}
