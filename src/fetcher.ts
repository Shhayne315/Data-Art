import { TimelineEvent } from './types';

export const fetchEvents = (): Promise<TimelineEvent[]> => {
    const mockData: TimelineEvent[] = [
        {
            time: "9:00 AM",
            title: "The Trip Begins!",
            description: "Our summer holiday adventure starts today.",
            date: "2025-09-01",
            imageUrl: "https://placehold.co/600x400/818CF8/FFFFFF?text=Departure",
            imageAlt: "Placeholder image for departure",
            category: "Day 1"
        },
        {
            time: "1:00 PM",
            title: "Arrival & Check-in",
            description: "Checked into our hotel and ready to explore.",
            date: "2025-09-01",
            imageUrl: "https://placehold.co/600x400/F59E0B/FFFFFF?text=Arrival",
            imageAlt: "Placeholder image for arrival",
            category: "Day 1"
        },
        {
            time: "10:00 AM",
            title: "Beach Day",
            description: "Enjoying the sun and sand.",
            date: "2025-09-02",
            imageUrl: "https://placehold.co/600x400/34D399/FFFFFF?text=Beach",
            imageAlt: "Placeholder image for the beach",
            category: "Day 2"
        }
    ];
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(mockData);
        }, 500);
    });
};
