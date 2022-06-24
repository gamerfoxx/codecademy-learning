import courses from './courses';
import studyGroups from './studyGroups';

type Course = {
    id: number;
    studyGroupId: number;
    title: string;
    keywords: string[];
    eventType: string;
}

type StudyGroups = {
    id: number;
    courseId: number;
    title: string;
    keywords: string[];
    eventType: string;
}
type SearchEventsOptions = {
    query: number | string;
    eventType: `courses` | `groups`
}

function searchEvents(options: SearchEventsOptions) {
    const events: (Course | StudyGroups)[] = options.eventType === `courses` ? courses : studyGroups;
    return events.filter((e) => {
        if (typeof options.query === `number`) {
            return options.query === e.id
        }
        if (typeof options.query === `string`) {
            return e.keywords.includes(options.query)
        }
    })
}
let enrolledEvents: (Course | StudyGroups)[] = [];

function enroll(event: Course | StudyGroups) {
    enrolledEvents = [...enrolledEvents, event]
}

const newSearch: SearchEventsOptions = {
    query: `art`,
    eventType: 'courses'
}
const searchResults: (Course | StudyGroups)[] = searchEvents(newSearch)

enroll(searchResults[0])
console.log(searchResults)
console.log(enrolledEvents)