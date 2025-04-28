export enum CategoriesType {
  iOS = 'Mobile',
  Web = 'Web',
  Flutter = 'Flutter',
  Backend = 'Backend',
  Integration = 'Integration'
}

export interface Categories {
  id: number
  title: string
  highlight: string
  description: string
  image: string
  type: CategoriesType
}

export const categories: Categories[] = [
  {
    id: 1,
    title: 'Mobile',
    highlight: 'iOS Native Mobile Applications',
    description: 'Experienced in native iOS development (Swift/Objective-C) \
    and cross-platform mobile solutions using Flutter, delivering\
     polished, high-quality apps for the App Store.\
     I focus on smooth user experience (UX) and robust performance across diverse devices.',
    image: 'https://developer.apple.com/swift/images/swift-og.png',
    type: CategoriesType.iOS
  },
  {
    id: 2,
    title: 'Flutter',
    highlight: 'Cross-platform mobile development framework that allows you to build apps for multiple platforms using a single codebase.',
    description: 'Skilled at building modern, efficient, and visually appealing mobile and web apps using Flutter. I emphasize clean architecture, \
    state management, and modular design for scalable and maintainable projects.',
    image: 'https://static-00.iconduck.com/assets.00/flutter-icon-2048x2048-ufx4idi8.png',
    type: CategoriesType.Flutter
  },
  {
    id: 3,
    title: 'Backend',
    highlight: 'Describe the item and include any relevant details. Click to edit the text.',
    description: 'Solid expertise in backend technologies (PHP, Python, Terraform) \
    and database management (MySQL, AWS, Azure, Firebase). I develop secure APIs, authentication systems, \
    and backend infrastructures to support both mobile and web applications.',
    image: 'https://verpex.com/assets/uploads/images/blog/How-to-become-a-Backend-Developer.jpg?v=1665484477',
    type: CategoriesType.Backend
  },
  {
    id: 4,
    title: 'Integration',
    highlight: '',
    description: 'Experienced in system integration, connecting various APIs, \
    third-party services, and microservices efficiently. \
    I specialize in building reliable bridges between mobile/web \
    clients and server-side systems, using Playwright for web and Flutter Driver for mobile.',
    image: 'https://andrewevans.dev/images/PLAYWRIGHT.png',
    type: CategoriesType.Integration
  },
  {
    id: 5,
    title: 'Web',
    highlight: 'Web Development',
    description: 'Proficient in creating responsive, user-friendly web applications with technologies \
    like HTML5, Vuetify, Tailwind CSS, TypeScript, and Laravel. \
    I ensure seamless experiences across desktop and mobile platforms.',
    image: 'https://s3-cdn.cmlabs.co/page/2023/10/04/web-developer-definition-skills-and-responsibilities-908401.png',
    type: CategoriesType.Web
  }
]
