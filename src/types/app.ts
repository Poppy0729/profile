import { CategoriesType } from "./enum/categories"

export interface AppDetail {
    id: number,
    image: string,
    author: string,
    title: string,
    description: string,
    detail: string,
    technologies: string[],
    features: string[],
    views: number,
    categories: CategoriesType
    tags: string[]
}

export const appDetails: AppDetail[] = [
    {
        id: 1,
        image: 'https://cdn.mos.cms.futurecdn.net/JNJTcXfPoYrQFP6m38gkPn-1200-80.jpg',
        author: 'Poppy Shutter',
        title: 'iOS App: Top Tips and Tricks',
        description: 'Are you looking to enhance your iOS development skills and take your app...',
        detail: 'In the world of web development, the backend is a crucial component that powers the...',
        technologies: [],
        features: [],
        views: 0,
        categories: CategoriesType.iOS,
        tags: ['iOS', 'Swift', 'Mobile']
      },
      {
        id: 2,
        image: 'https://i.ytimg.com/vi/o5RiYHW-nlU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDGzPdJqLMxHkr8Qh2JBnrGRL-fxA',
        author: 'Poppy Shutter',
        title: 'iOS App: Enhancing Performance and Security',
        description: 'In the world of web development, the backend is a crucial component that powers the...',
        detail: 'In the world of web development, the backend is a crucial component that powers the...',
        technologies: [],
        features: [],
        views: 0,
        categories: CategoriesType.iOS,
        tags: ['iOS', 'Swift', 'Mobile']
      },
      {
        id: 3,
        image: 'https://static.thairath.co.th/media/4DQpjUtzLUwmJZZSGobM7YeCaqJHhpQqFyZsnmrp3JNC.jpg',
        author: 'Poppy Shutter',
        title: 'Flutter App: Cross-Platform Development',
        description: 'Are you interested in delving into the exciting realm of cross-platform development? If so...',
        detail: 'In the world of web development, the backend is a crucial component that powers the...',
        technologies: [],
        features: [],
        views: 0,
        categories: CategoriesType.iOS,
        tags: ['Flutter', 'Dart', 'Mobile']
      },
      {
        id: 4,
        image: 'https://www.proalley.com/blog/content/images/2022/11/web-design-concept-with-drawings.jpg',
        author: 'Poppy Shutter',
        title: 'Web: Top Tips and Tricks',
        description: 'Are you looking to enhance your iOS development skills and take your app...',
        detail: 'In the world of web development, the backend is a crucial component that powers the...',
        technologies: [],
        features: [],
        views: 0,
        categories: CategoriesType.iOS,
        tags: ['Web', 'HTML', 'CSS']
      },
      {
        id: 5,
        image: 'https://conmigomedia.com/wp-content/uploads/2024/09/How-to-Become-a-Web-Designer.png',
        author: 'Poppy Shutter',
        title: 'Backend: Enhancing Performance and Security',
        description: 'In the world of web development, the backend is a crucial component that powers the...',
        detail: 'In the world of web development, the backend is a crucial component that powers the...',
        technologies: [],
        features: [],
        views: 0,
        categories: CategoriesType.iOS,
        tags: ['Backend', 'PHP', 'Laravel']
      },
      {
        id: 6,
        image: 'https://cdn.mos.cms.futurecdn.net/JNJTcXfPoYrQFP6m38gkPn-1200-80.jpg',
        author: 'Poppy Shutter',
        title: 'Automation Test: Cross-Platform Development',
        description: 'Are you interested in delving into the exciting realm of cross-platform development? If so...',
        detail: 'In the world of web development, the backend is a crucial component that powers the...',
        technologies: [],
        features: [],
        views: 0,
        categories: CategoriesType.Integration,
        tags: ['Automation Test', 'Selenium', 'Mobile']
      },
]