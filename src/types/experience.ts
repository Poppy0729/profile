export interface Experience {
    year: string;
    company: string;
    description: string[];
    jobRole: string;
    headline?: string;
    color: string;
}

export const allExperience: Experience[] = [
    {
        year: "2023 - Present",
        company: "Krungsri Auto (Contract)",
        headline: "Create and setup all new project, that have web, mobile, backend and integration test",
        description: [
            "Implement a new Tablet project using Flutter base on Android. Already config environment dev, qa and production",
            "Experience setup pipeline CI/CD with GOCD for trigger build, deploy and testing",
            "Config and prepare necessary security for Pentest",
            "Setup and writing E2E automation tests via Flutter for Mobile",
            "Setup and writing E2E automation tests via Playwright for Web.",
            "Writing API with Python able to features. etc, get/update data from DynamoDB, SQS, S3, CloudWatch and connect the internal system etc.",
            "Config infrastructure to run on AWS using Terraform and Setup CloudWatch and Cloudfront to monitor and optimize performance",
        ],
        jobRole: "Full Stack Developer",
        color: "cyan",
    },
    {
        year: "Jun 2021 - Jul 2023",
        company: "Buzzebees",
        headline: "Implement the mobile application digital CRM platform and developed \
            iOS Framework private or public to integrate with API and our product. In\
            addition, it also developed a project for mobile banking and food delivery.\
            The project using MVVM, MVC design pattern and publishing application\
            on the App Store",
        description: [
            "Developed, implemented and maintained 10+ application and used RESTful API, CocoaPods, Firebase, Crashlytic, Fastlane",
            "Familiarly push notification, cloud messaging, authentication with Third-party login and iOS Biometric Local",
            "Developed verify login with reCAPTCHA v2",
            "Developed map to show store list using google map or MapKit",
            "Developed application for multi language",
            "Using automation tools CI/CD with Fastlane, Azure and Appcenter"
        ],
        jobRole: "Senior iOS Developer",
        color: "orange",
    },
    {
        year: "Apr 2020 - Apr 2021",
        company: "Neversitup",
        headline: "Development the iPhone application for in-house and outsource. The highlight project is Piggipo Go, \
        a mobile financial to record income and expenses of credit card, wallet and show expenses summary each month.",
        description: [
            "Development mobile application using Swift/Objective C",
            "Using Firebase and Real to data collection for real-time/offline mode",
            "Using Firebase Remote config for maintenance/update application",
            "Familiarly machine learning OCR with Firebase ML",
            "Developed In-App purchase",
            "Using Google cloud platform (Google Map SDK/ and Places API) for feature in the app",
            "Code quality check CI with SonarQube"
        ],
        jobRole: "iOS Developer",
        color: "pink",
    },
    {
        year: "Sep 2019 - Oct 2019",
        company: "Apptitude (Contract)",
        headline: "Working during the final Thesis experiment, developed about e-\
            commerce iOS application. The working flow with Agile development\
            (Scrum process using JIRA) and git version control system using Bitbucket\
            and Codacy for reviewing code",
        description: [],
        jobRole: "Full Stack Developer,",
        color: "green",
    },
    {
        year: "Jul 2017 - Sep 2017",
        company: "Apptitude (Contract)",
        headline: "Apptitude over the summer about iPad application to screen Thai language\
            skill, and development part show result from KidArn app on Kiddiary\
            school website. Implement API endpoint for mobile and Web using PHP\
            Laravel.",
        description: [],
        jobRole: "Full Stack Developer",
        color: "purple",
    },
    {
        year: "Jan 2017 - Apr 2017",
        company: "NECTEC (Internship)",
        headline: "Developed iPad application to screen Thai language skill for primary\
            school and observe and collect data at the 4 schools. Working with\
            doctors and teachers expert.",
        description: [],
        jobRole: "iOS Developer",
        color: "red",
    },
]