
interface AchievementItem {
    title: string;
    file: string;
}

interface AchievementCategory {
    category: string;
    items: AchievementItem[];
}

/**
 * ACHIEVEMENTS DATA STRUCTURE
 * 
 * This data is filtered by the Achievements component based on filter tabs:
 * - "All" → Shows all categories
 * - "Awards" → Shows only "Awards & Recognitions"
 * - "Certificates | Technical Courses" → Shows AWS, CISCO, Cognitive Class, GTech Learn, Google, Hack2Skill, HackerRank, IBM, Infosys Springboard, Microsoft, Pantech e Learning, Saylor Academy, Scaler, SimpliLearn, Skill India, Skill Nation, Udemy, GeeksforGeeks, HP Life
 * - "Bootcamps | Events | Competitions" → Shows Hackathons & Events, Let's Upgrade, Unstop, MyBharat, myGov, Hack2Skill, Kaggle, Skill India
 * - "Internship Certificates" → Shows Oasis Infobyte
 * - "Badges | Trophies" → Shows Google Badges, Holopin Badges, Microsoft Badges, Microsoft Trophies, HP Life Badges
 * 
 * ORGANIZATION:
 * 1. AWARDS CATEGORY - Major awards and recognitions
 * 2. BOOTCAMP/EVENT CATEGORIES - Competitions, hackathons, bootcamps, events
 * 3. CERTIFICATE/COURSE CATEGORIES - Technical courses and certifications
 * 4. BADGE/TROPHY CATEGORIES - Badges and trophies from platforms
 * 5. INTERNSHIP CERTIFICATES - Internship program certificates
 */

export const achievementsData: AchievementCategory[] = [
    // ==================== AWARDS ====================
    {
        category: "Awards & Recognitions",
        items: [
            { title: "SSWC'25 Best Paper Award", file: "/Achievements/SSWC'2025/SSWC'25_Best_Paper_Award.jpg" },
            { title: "Awards and Certificates in SSWC-2025", file: "/Achievements/SSWC'2025/Awards_and_Certificates_in_SSWC-2025.png" },
            { title: "SSWC'25 Best Paper Award Certificate", file: "/Achievements/SSWC'2025/SSWC'25_Best_Paper_Certificate.jpg" },
            { title: "Merit Scholarship Award (2023)", file: "/Achievements/Merit_Scholarship_Award.jpeg" },
            { title: "Babin Bid Merit Scholarship 2023", file: "/Achievements/Babin_Bid_Merit_Scholarship_2023.jpeg" },
            { title: "Google Solution Challenge 2024", file: "/Achievements/Google_Solution_Challenge_2024.jpeg" },
        ]
    },

    // ==================== BOOTCAMPS | EVENTS | COMPETITIONS ====================
    {
        category: "Events & Hackathons",
        items: [
            { title: "SSWC'25 Presenter Certificate", file: "/Achievements/SSWC'2025/SSWC'25_Presenter_Certificate.jpg" },
            { title: "Author Certificate SSWC'25", file: "/Achievements/SSWC'2025/Author_Certificate_SSWC'2025.png" },
            { title: "Volunteer Certificate", file: "/Achievements/Babin_Bid-vol.png" },
            { title: "ICDMAI Participation", file: "/Achievements/Babin_Bid__ICDMAI.jpeg" },
            { title: "JIS Poster Competition", file: "/Achievements/Babin_Bid__JIS_Poster_Competition.jpeg" },
            { title: "Poster Competition on Engineers Day", file: "/Achievements/Babin_Bid__Poster_Competition_on_Engineers_Day.png" },
            { title: "GDSC Cloud Campaign", file: "/Achievements/GDSC_Cloud_Campaign.jpeg" },
            { title: "NSHM Hackathon", file: "/Achievements/NSHM_Hackathon.jpeg" },
            { title: "Hack Defence Summit 2026", file: "/Achievements/Hack_Defence_Summit_2026.png" }
        ]
    },
    {
        category: "Hack2Skill",
        items: [
            { title: "GDG on Campus Solution Challenge", file: "/Achievements/Hack2Skill/Hack2skill-Certificate.png" },
            { title: "Hack2skill-Certificate GEN AI Exchange Program", file: "/Achievements/Hack2Skill/Hack2skill-Certificate_GEN_AI_Exchange_Program.png" },
            { title: "Gen AI Exchange Hackathon", file: "/Achievements/Hack2Skill/Gen_AI_Exchange_Hackathon.png" },
            { title: "TechSprint Hackathon 2025 On Campus OIST", file: "/Achievements/Hack2Skill/Babin_Bid_Certificate_TechSprint_2025.png" },
            { title: "TechSprint Leveraging the power of AI Hackathon", file: "/Achievements/Hack2Skill/TechSprint_AI_Hackathon_2026_(Babin_Bid).jpg" },
            { title: "SuperHack 2025", file: "/Achievements/Hack2Skill/SuperHack_2025.png" },
        ]
    },
    {
        category: "Kaggle",
        items: [
            { title: "5-Day AI Agents Intensive Course with Google", file: "/Achievements/Kaggle/5-Day_AI_Agents_Intensive_Course_with_Google.png" },
        ]
    },
    {
        category: "Let's Upgrade",
        items: [
            { title: "LUEAIAJUL125202", file: "/Achievements/LU/LUEAIAJUL125202.pdf" },
            { title: "LUEAIDAAUG125112", file: "/Achievements/LU/LUEAIDAAUG125112.pdf" },
            { title: "LUEAIMJUN125215", file: "/Achievements/LU/LUEAIMJUN125215.pdf" },
            { title: "LUEDSJUN125174", file: "/Achievements/LU/LUEDSJUN125174.pdf" },
            { title: "LUEEXLMAY1251777", file: "/Achievements/LU/LUEEXLMAY1251777.pdf" },
            { title: "LUEFGJUL1251195", file: "/Achievements/LU/LUEFGJUL1251195.pdf" },
            { title: "LUEGAIMAY12520", file: "/Achievements/LU/LUEGAIMAY12520.pdf" },
            { title: "LUEGDMAY1251307", file: "/Achievements/LU/LUEGDMAY1251307.pdf" },
            { title: "LUEGGJUN125278", file: "/Achievements/LU/LUEGGJUN125278.pdf" },
            { title: "LUEGQLJUL125189", file: "/Achievements/LU/LUEGQLJUL125189.pdf" },
            { title: "LUEHTMLJUL125550", file: "/Achievements/LU/LUEHTMLJUL125550.pdf" },
            { title: "LUEJAVAJAN1251493", file: "/Achievements/LU/LUEJAVAJAN1251493.pdf" },
            { title: "LUEJSJUL1251241", file: "/Achievements/LU/LUEJSJUL1251241.pdf" },
            { title: "LUELLMJUN125233", file: "/Achievements/LU/LUELLMJUN125233.pdf" },
            { title: "LUENJSJUN12565", file: "/Achievements/LU/LUENJSJUN12565.pdf" },
            { title: "LUEPMTJUL125818", file: "/Achievements/LU/LUEPMTJUL125818.pdf" },
            { title: "LUEPYTJUN125870", file: "/Achievements/LU/LUEPYTJUN125870.pdf" },
            { title: "LUEPYTMAY125244", file: "/Achievements/LU/LUEPYTMAY125244.pdf" },
            { title: "LUERJSJUN125217", file: "/Achievements/LU/LUERJSJUN125217.pdf" },
            { title: "LUESQLJUN125799", file: "/Achievements/LU/LUESQLJUN125799.pdf" },
            { title: "LUEWAJUN125246", file: "/Achievements/LU/LUEWAJUN125246.pdf" },
        ]
    },
    {
        category: "myGov",
        items: [
            { title: "6th National Online Quiz", file: "/Achievements/myGov/6th_National_Online_Quiz.jpg" },
            { title: "Chandrayaan - 3", file: "/Achievements/myGov/Chandrayaan_-_3.jpeg" },
            { title: "Clean Sport Quiz", file: "/Achievements/myGov/Clean_Sport_Quiz.jpg" },
            { title: "Digital India Quiz - A Decade of Progress English", file: "/Achievements/myGov/Digital_India_Quiz_-_A_Decade_of_Progress_English.jpg" },
            { title: "Ending Plastic Pollution Quiz", file: "/Achievements/myGov/Ending_Plastic_Pollution_Quiz.jpeg" },
            { title: "Fit India - National Sports Day Quiz 2025", file: "/Achievements/myGov/Fit_India_-_National_Sports_Day_Quiz_2025.jpg" },
            { title: "Har Ghar Tiranga Quiz 2025", file: "/Achievements/myGov/Har_Ghar_Tiranga_Quiz_2025.jpg" },
            { title: "Indian Independence Day Quiz 2025", file: "/Achievements/myGov/Indian_Independence_Day_Quiz_2025.jpg" },
            { title: "Metro Rail Taking India Forward Quiz", file: "/Achievements/myGov/Metro_Rail_Taking_India_Forward_Quiz.jpg" },
            { title: "National Space Day Quiz 2025", file: "/Achievements/myGov/National_Space_Day_Quiz_2025.jpg" },
            { title: "Pledge for voluntary Blood Donation", file: "/Achievements/myGov/Pledge_for_voluntary_Blood_Donation.pdf" },
            { title: "Pledge to use Indian handloom - 2025", file: "/Achievements/myGov/Pledge_to_use_Indian_handloom_-_2025.pdf" },
            { title: "Pledge UPITS 2025", file: "/Achievements/myGov/Pledge_UPITS_2025.pdf" },
            { title: "Say No To Tobacco Pledge", file: "/Achievements/myGov/Say_No_To_Tobacco_Pledge.jpg" },
            { title: "Swachh Bharat Mission Grameen Phase-II Quiz", file: "/Achievements/myGov/Swachh_Bharat_Mission_Grameen_Phase-II_Quiz.jpg" },
            { title: "Swachh Bharat Quiz", file: "/Achievements/myGov/Swachh_Bharat_Quiz.jpg" },
            { title: "Viksit Bharat 2025 Quiz", file: "/Achievements/myGov/Viksit_Bharat_2025_Quiz_English.jpg" },
        ]
    },
    {
        category: "MyBharat",
        items: [
            { title: "Registering on MY Bharat Certificate", file: "/Achievements/MyBharat/Registering_on_MY_Bharat_Certificate.pdf" },
            { title: "Screening Quiz -Audit Diwas 2025", file: "/Achievements/MyBharat/Screening_Quiz_-Audit_Diwas_2025.png" },
            { title: "VBYLD Essay 2025", file: "/Achievements/MyBharat/VBYLD_Essay_2025.pdf" },
            { title: "Viksit Bharat Young Leaders Dialogue VBYLD 2026", file: "/Achievements/MyBharat/Viksit_Bharat_Young_Leaders_Dialogue_VBYLD_2026.png" },
            { title: "Budget Quest 2026", file: "/Achievements/MyBharat/MY_Bharat_Budget_Quest_2026.png" },
        ]
    },
    {
        category: "Skill India",
        items: [
            { title: "Solar Panel Installations Technician", file: "/Achievements/Skill%20India/certificate_0582d12e-d615-4019-9583-aa8dbac3ffe5.pdf" },
            { title: "Web Design & Development", file: "/Achievements/Skill%20India/certificate_0e985123-f259-488a-9a41-a316980ea081.pdf" },
            { title: "Foundational Skills Program - Retail", file: "/Achievements/Skill%20India/certificate_17eaa86a-05d8-4945-a554-f9d5eb54d0fe.pdf" },
            { title: "Foundational Skills Program - Employability", file: "/Achievements/Skill%20India/certificate_29f1b4ad-3371-4474-ac3d-e023cb1e9e4a.pdf" },
            { title: "Kisan Drone Operator", file: "/Achievements/Skill%20India/certificate_32d86c56-efc6-4c33-9c65-17901e296f8e.pdf" },
            { title: "Al for All", file: "/Achievements/Skill%20India/certificate_6606b92d-c73a-458d-94f4-ad5ff5fff177.pdf" },
            { title: "प्रधानमंत्री आरोग्य मित्र - (Pradhan Mantri Arogya Mitra)", file: "/Achievements/Skill%20India/certificate_7f9c1f98-a24d-4198-bcce-b2cd5dd96629.pdf" },
            { title: "Kaushal Mitra", file: "/Achievements/Skill%20India/certificate_86f3f565-2b07-4081-8046-80887b45bfa8.pdf" },
            { title: "Cybersecurity", file: "/Achievements/Skill%20India/certificate_9390e20a-9cac-48f7-9fb4-35eddca4aeae.pdf" },
            { title: "SOAR - AI to be Aware", file: "/Achievements/Skill%20India/certificate_a246c1f3-b894-400e-a0ff-97931bf85e3c.pdf" },
            { title: "Python for Data Science", file: "/Achievements/Skill%20India/certificate_d1953bf0-6b5c-4fa2-98c4-f51660ed818c.pdf" },
            { title: "Foundations of Drone Technology: Principles and Practical Applications", file: "/Achievements/Skill%20India/certificate_ddb95b91-6183-456b-8ece-7fca6792587a.pdf" },
            { title: "Foundational Skills Program - Entrepreneurship", file: "/Achievements/Skill%20India/certificate_e5497492-7ad0-4f83-a75f-65049de8b0b9.pdf" },
        ]
    },

    // ==================== CERTIFICATES | TECHNICAL COURSES ====================

    {
        category: "AWS",
        items: [
            { title: "AWS Academy Graduate - Cloud Data Pipeline Builder", file: "/Achievements/AWS/Cloud Data Pipeline Builder.png" },
            { title: "AWS Academy Graduate - Cloud Web Application Builder", file: "/Achievements/AWS/Cloud Web Application Builder.png" },
            { title: "AWS Academy Graduate - Microservices and CI/CD Pipeline Builder", file: "/Achievements/AWS/Microservices and CI-CD Pipeline Builder.png" },
            { title: "AWS Academy Graduate - Cloud Architecting", file: "/Achievements/AWS/Cloud Architecting.png" },
            { title: "AWS Academy Graduate - Cloud Developing", file: "/Achievements/AWS/Cloud Developing.png" },
            { title: "AWS Academy Graduate - Cloud Foundations", file: "/Achievements/AWS/Cloud Foundations.png" },
            { title: "AWS Academy Graduate - ML for NLP", file: "/Achievements/AWS/ML for NLP.png"},
            { title: "AWS Academy Graduate - Machine Learning Foundations", file: "/Achievements/AWS/Machine Learning Foundations.png"},
            { title: "AWS Academy Graduate - Generative AI Foundations", file: "/Achievements/AWS/Generative AI Foundations.png"},
            { title: "Fundamentals of Machine  Learning and Artificial Intelligence", file: "/Achievements/AWS/Fundamentals_of_Machine__Learning_and_Artificial_Intelligence.pdf" },
        ]
    },
    {
        category: "CISCO",
        items: [
            { title: "python-essentials-1.1", file: "/Achievements/CISCO/python-essentials-1.1.png" },
            { title: "Python Essentials 1", file: "/Achievements/CISCO/_certificate_babinbid05-gmail-com_2d321f23-e6aa-4278-a044-7d6644c5d32b.pdf" },
            { title: "Introduction to Data Science", file: "/Achievements/CISCO/_certificate_babinbid05-gmail-com_ba42d602-e2d5-4287-8c0d-7e89a82aefb9.pdf" },
        ]
    },
    {
        category: "Cognitive Class",
        items: [
            { title: "Data Analysis with Python", file: "/Achievements/Cognitive%20Class/Data_Analysis_with_Python.pdf" },
            { title: "Data Science 101", file: "/Achievements/Cognitive%20Class/Data_Science_101.pdf" },
            { title: "Python 101 for Data Science  Cognitive Class", file: "/Achievements/Cognitive%20Class/Python_101_for_Data_Science__Cognitive_Class.pdf" },
        ]
    },
    {
        category: "GeeksforGeeks",
        items: [
            { title: "Al agent using Agentforce", file: "/Achievements/gfg/Al_agent_using_Agentforce.png" },
        ]
    },
    {
        category: "Google",
        items: [
            { title: "Gemini Certified Student", file: "/Achievements/Google/Gemini_Certified_Student.pdf" },
            { title: "Bring Al to Work Workshop", file: "/Achievements/Google/1172653244BB.pdf" },
            { title: "Al-Powered Shopping ads Certification", file: "/Achievements/Google/69izjm6b_1749161905073.pdf" },
            { title: "Al-Powered Performance Ads Certification", file: "/Achievements/Google/a6f6uizk_1749160844397.pdf" },
            { title: "Google Play Store Listing Certificate", file: "/Achievements/Google/Google_Play_Academy.pdf" },
        ]
    },
    {
        category: "GTech Learn",
        items: [
            { title: "SC-900 Microsoft Security Fundamentals", file: "/Achievements/GTech%20Learn/SC-900_Microsoft_Security_Fundamentals.png" },
        ]
    },
    {
        category: "HackerRank",
        items: [
            { title: "SQL Basic Certificate", file: "/Achievements/HackerRank/SQL_Basic_Certificate_Hackerrank.pdf" },
            { title: "SQL Intermediate Certificate", file: "/Achievements/HackerRank/SQL_Intermediate_Certificate_Hackerrank.pdf" },
        ]
    },
    {
        category: "HCL Guvi",
        items: [
            { title: "YUVA AI for ALL", file: "/Achievements/HCL Guvi/HCL_GUVI~~Certification.png"},
        ]
    },
    {
        category: "HP Life",
        items: [
            { title: "3D Printing hp Life", file: "/Achievements/hp%20Life/3D_Printing_hp_Life.pdf" },
            { title: "AI for Beginners hp Life", file: "/Achievements/hp%20Life/AI_for_Beginners_hp_Life.pdf" },
            { title: "Data Science and Analytics hp Life", file: "/Achievements/hp%20Life/Data_Science_and_Analytics_hp_Life.pdf" },
            { title: "Introduction to Cybersecurity Awareness hp Life", file: "/Achievements/hp%20Life/Introduction_to_Cybersecurity_Awareness_hp_Life.pdf" },
            { title: "Presenting Data hp Life", file: "/Achievements/hp%20Life/Presenting_Data_hp_Life.pdf" },
        ]
    },
    {
        category: "IBM",
        items: [
            { title: "Web Development Fundamentals", file: "/Achievements/IBM/IBMDesign20250612-28-nhj93e.pdf" },
            { title: "Cybersecurity Fundamentals", file: "/Achievements/IBM/IBMDesign20250616-26-5qh6st.pdf" },
        ]
    },
    {
        category: "Infosys Springboard",
        items: [
            { title: "Fundamentals of Information Security", file: "/Achievements/Infosys%20Springboard/1-09c270d2-409a-46f6-b79c-d0dd57b9c490.pdf" },
            { title: "IoT Edge Computing and IoT Analytics", file: "/Achievements/Infosys%20Springboard/1-0d884177-c098-4136-bf54-2f9e7c55cd94.pdf" },
            { title: "Agile Scrum in Practice", file: "/Achievements/Infosys%20Springboard/1-1556c645-6517-45b7-8700-898f6da4d735.pdf" },
            { title: "Email Writing Skills", file: "/Achievements/Infosys%20Springboard/1-16669cfd-cb33-4fbb-9e92-b82dd7beb810.pdf" },
            { title: "Python for Data Science", file: "/Achievements/Infosys%20Springboard/1-239ec735-7c77-484b-b687-bfb85d834b02.pdf" },
            { title: "Introduction to Deep Learning", file: "/Achievements/Infosys%20Springboard/1-35187ec6-e81e-4813-8a5e-184601644be8.pdf" },
            { title: "Introduction to Cloud Computing", file: "/Achievements/Infosys%20Springboard/1-3e9496db-f225-403f-81fe-8384e23679e5.pdf" },
            { title: "Time Management", file: "/Achievements/Infosys%20Springboard/1-49e4f4a0-49b1-49b4-93bd-69cadc709628.pdf" },
            { title: "High Impact Presentations", file: "/Achievements/Infosys%20Springboard/1-51a4876b-537f-47a5-9905-78f4141766d6.pdf" },
            { title: "Introduction to Robotic Process Automation", file: "/Achievements/Infosys%20Springboard/1-558786bf-2dc7-4b5f-9723-49a60a919df4.pdf" },
            { title: "Data Science", file: "/Achievements/Infosys%20Springboard/1-70126be5-8f3d-4aea-af29-b54ff5ae69b9.pdf" },
            { title: "Introduction to Natural Language Processing", file: "/Achievements/Infosys%20Springboard/1-75591592-7d19-4c9d-a688-3457cc2f3c66.pdf" },
            { title: "Deep Learning for Developers", file: "/Achievements/Infosys%20Springboard/1-7b2ca8e0-0138-453d-b272-5e69b74700b8.pdf" },
            { title: "Computer Vision 101", file: "/Achievements/Infosys%20Springboard/1-8e3c9313-5213-420a-af84-752340592f72.pdf" },
            { title: "Artificial Intelligence", file: "/Achievements/Infosys%20Springboard/1-931e44a6-5930-42bf-b4b5-abcdf20c6116.pdf" },
            { title: "Generative models for developers", file: "/Achievements/Infosys%20Springboard/1-986b0569-c6ec-47cf-bb8e-1287c97f3a94.pdf" },
            { title: "OpenAI Generative Pre-trained Transformer 3 (GPT-3) for developers", file: "/Achievements/Infosys%20Springboard/1-aad4f222-07b9-4733-8450-245b25ec35fc.pdf" },
            { title: "Introduction to Data Science", file: "/Achievements/Infosys%20Springboard/1-ac75378f-5550-4bb6-905b-1fe700314a37.pdf" },
            { title: "Principles of Generative AI Certification", file: "/Achievements/Infosys%20Springboard/1-b0547257-d7e9-43c5-b919-241594058c84.pdf" },
            { title: "Prompt Engineering", file: "/Achievements/Infosys%20Springboard/1-b0f8b804-5295-46be-b4f8-d5958f569007.pdf" },
            { title: "Introduction to OpenAI GPT Models", file: "/Achievements/Infosys%20Springboard/1-c6cf1a93-7d30-453a-b458-6cb9138f7c36.pdf" },
            { title: "Artificial Intelligence Primer Certification", file: "/Achievements/Infosys%20Springboard/1-f5229171-4125-467b-b3bf-9a4a30b32573.pdf" },
            { title: "Generative AI Unleashing", file: "/Achievements/Infosys%20Springboard/1-ff24920a-890c-44da-b73b-4f298181296e.pdf" },
        ]
    },
    {
        category: "Microsoft",
        items: [
            { title: "Develop AI Skills with Microsoft Copilot", file: "/Achievements/Microsoft/Develop_AI_Skills_with_Microsoft_Copilot.pdf" },
            { title: "Foundational C# with Microsoft", file: "/Achievements/Microsoft/Foundational_CSharp_with_Microsoft.pdf" },
            { title: "Microsoft AI Skills Fest", file: "/Achievements/Microsoft/Microsoft_AI_Skills_Fest.pdf" },
        ]
    },
    {
        category: "Pantech e Learning",
        items: [
            { title: "5 days Faculty Development Program on AI, ML & Deep Learning for Autonomous Vehicles", file: "/Achievements/Pantech%20e%20Learning/AV_FDP.pdf" },
            { title: "One Week National Level Faculty Development Programme on Recent Trends on Al - Text, Vision & Hardware Implementation Models", file: "/Achievements/Pantech%20e%20Learning/page_089.pdf" },
        ]
    },
    {
        category: "Qualcomm",
        items: [
            { title: "AI Upskilling Certificate", file: "/Achievements/Qualcomm/AI-Upskilling-certificate.pdf" },
        ]
    },
    {
        category: "Saylor Academy",
        items: [
            { title: "CS101: Introduction to Computer Science I", file: "/Achievements/Saylor%20Academy/8859238240BB.pdf" },
            { title: "CS102: Introduction to Computer Science II", file: "/Achievements/Saylor%20Academy/5022676954BB.pdf" },
        ]
    },
    {
        category: "Scaler",
        items: [
            { title: "How is GenAl Changing the Role of a Data Scientist Masterclass", file: "/Achievements/Scaler/How_is_GenAl_Changing_the_Role_of_a_Data_Scientist_Masterclass.png" },
            { title: "What does it take to become a Microsoft SDE Masterclass", file: "/Achievements/Scaler/What_does_it_take_to_become_a_Microsoft_SDE_Masterclass.png" },
        ]
    },
    {
        category: "SimpliLearn",
        items: [
            { title: "Design Thinking for Beginners", file: "/Achievements/SimpliLearn/4615986_1698733297.pdf" },
            { title: "Free Data Scientist Course", file: "/Achievements/SimpliLearn/Free_Data_Scientist_Course.pdf" },
            { title: "Gemini in Gmail SimpliLearn", file: "/Achievements/SimpliLearn/Gemini_in_Gmail_SimpliLearn.pdf" },
        ]
    },
    {
        category: "Skill Nation",
        items: [
            { title: "Babin Bid Google My Business", file: "/Achievements/Skill%20Nation/Babin_Bid_Google_My_Business.pdf" },
        ]
    },
    {
        category: "Udemy",
        items: [
            { title: "Graphic Design Masterclass Bootcamp from Beginner to Expert", file: "/Achievements/Udemy/Graphic_Design_Masterclass_Bootcamp_from_Beginner_to_Expert.jpg" },
        ]
    },
    {
        category: "Unstop",
        items: [
            { title: "Certificate of Excellence in Challenge 44 of Weekly Coding Challenge", file: "/Achievements/Unstop/Certificate_of_Excellence_in_Challenge_44_of_Weekly_Coding_Challenge.pdf" },
            { title: "Certificate of Excellence in Treasure Hunt - August Series 2025", file: "/Achievements/Unstop/Certificate_of_Excellence_in_Treasure_Hunt_-_August_Series_2025.pdf" },
            { title: "Certificate of Participation in Challenge 44 of Weekly Coding Challenge", file: "/Achievements/Unstop/Certificate_of_Participation_in_Challenge_44_of_Weekly_Coding_Challenge.pdf" },
            { title: "Certificate of Participation in Treasure Hunt - August Series 2025", file: "/Achievements/Unstop/Certificate_of_Participation_in_Treasure_Hunt_-_August_Series_2025.pdf" },
            { title: "Hack-O-Octo 3.0", file: "/Achievements/Unstop/Hack-O-Octo_3.0.pdf" },
            { title: "Hackquest  Certificate of Participation", file: "/Achievements/Unstop/Hackquest__Certificate_of_Participation.pdf" },
            { title: "HackShastra Certificate of Participation", file: "/Achievements/Unstop/HackShastra_Certificate_of_Participation.pdf" },
            { title: "HackShastra Certificate of Participation Round 1", file: "/Achievements/Unstop/HackShastra_Certificate_of_Participation_Round_1.pdf" },
            { title: "HackwithChandigarh 2.0", file: "/Achievements/Unstop/HackwithChandigarh_2.0.pdf" },
            { title: "HP Power Lab 2.0", file: "/Achievements/Unstop/HP_Power_Lab_2.0.pdf" },
            { title: "Paranox 2.O", file: "/Achievements/Unstop/Paranox_2.O.pdf" },
            { title: "Paranox 2.O Official", file: "/Achievements/Unstop/Paranox_2.O_Official.pdf" },
            { title: "PRATHAM 2025", file: "/Achievements/Unstop/PRATHAM_2025.pdf" },
            { title: "Synapse 2025", file: "/Achievements/Unstop/Synapse_2025.pdf" },
            { title: "Treasure Hunt - December Series 2025", file: "/Achievements/Unstop/Treasure_Hunt_December_Series.pdf" },
        ]
    },

    // ==================== BADGES | TROPHIES ====================
    {
        category: "AWS Badges",
        items: [
            { title: "Cloud Data Pipeline Builder Training Badge", file: "/Achievements/AWS/aws-academy-graduate-cloud-data-pipeline-builder-tr.png" },
            { title: "Cloud Web Application Builder  Training Badge", file: "/Achievements/AWS/aws-academy-graduate-cloud-web-application-builder-.png" },
            { title: "Microservices and CI/CD Pipeline Training Badge", file: "/Achievements/AWS/aws-academy-graduate-microservices-and-ci-cd-pipeli.png" },
            { title: "Cloud Computing 101 Training Badge", file: "/Achievements/AWS/aws-educate-introduction-to-cloud-101-training-badg.png"},
            { title: "Cloud Architecting Training Badge", file: "/Achievements/AWS/aws-academy-graduate-cloud-architecting-training-ba.png" },
            { title: "Cloud Developing Training Badge", file: "/Achievements/AWS/aws-academy-graduate-cloud-developing-training-badg.png"},
            { title: "Cloud Foundations Training Badge", file: "/Achievements/AWS/aws-academy-graduate-cloud-foundations-training-bad.png" },
            { title: "Generative AI Foundations Training Badge", file: "/Achievements/AWS/aws-academy-graduate-generative-ai-foundations-trai.png" },
            { title: "Machine Learning for Natural Language Processing Training Badge", file: "/Achievements/AWS/aws-academy-graduate-machine-learning-for-natural-l.png" },
            { title: "Machine Learning Foundations Training Badge", file: "/Achievements/AWS/aws-academy-graduate-machine-learning-foundations-t.png" },
        ]
    },
    {

        category: "Google Badges",
        items: [
            { title: "Gemini Certified Student", file: "/Achievements/Google/Gemini_Certified_Student.png" },
            { title: "AI Agent Home Run MLB Events Badge", file: "/Achievements/Google/ai-agent-home-run-mlb-events.png" },
            { title: "Google ADs AI-Powered Performance Badge", file: "/Achievements/Google/19ae5a64-7138-4ec2-a9fc-9d65b53d09ac.png" },
            { title: "Shopping Ads Badge", file: "/Achievements/Google/7c2be6e0-3895-4baf-946f-3c61969c27ec.png" },
        ]
    },
    {
        category: "Holopin Badges",
        items: [
            { title: "Early Bird Pegasaurus", file: "/Achievements/Holopin/Early_Bird_Pegasaurus.png" },
            { title: "Hacktoberfest 2025 Level 0 Registered", file: "/Achievements/Holopin/Hacktoberfest_2025_Level_0_Registered.webp" },
            { title: "Holopin x Hacktoberfest 1 Badge Club", file: "/Achievements/Holopin/Holopin_x_Hacktoberfest_1_Badge_Club.webp" },
        ]
    },
    {
        category: "HP Life Badges",
        items: [
            { title: "HP LIFE Ambassador", file: "/Achievements/hp%20Life/Badges/HP_LIFE_Ambassador.png" },
        ]
    },
    {
        category: "Microsoft Badges & Trophies",
        items: [
            { title: "Badge-Platinum", file: "/Achievements/Microsoft/Badge-Platinum.png" },
            { title: "Badge-Gold", file: "/Achievements/Microsoft/Badge-Gold.png" },
            { title: "Badge-Silver", file: "/Achievements/Microsoft/Badge-Silver.png" },
            { title: "Begin Python coding in Minecraft with MakeCode and Azure Notebooks", file: "/Achievements/Microsoft/BADGES/Begin_Python_coding_in_Minecraft_with_MakeCode_and_Azure_Notebooks.pdf" },
            { title: "Build programs using Python coding in Minecraft with Azure Notebooks", file: "/Achievements/Microsoft/BADGES/Build_programs_using_Python_coding_in_Minecraft_with_Azure_Notebooks.pdf" },
            { title: "Challenge project - Debug a C# console application using Visual Studio Code", file: "/Achievements/Microsoft/BADGES/Challenge_project_-_Debug_a_CSharp_console_application_using_Visual_Studio_Code.pdf" },
            { title: "Challenge project - Develop foreach and if-elseif-else structures to process array data in C#", file: "/Achievements/Microsoft/BADGES/Challenge_project_-_Develop_foreach_and_if-elseif-else_structures_to_process_array_data_in_CSharp.pdf" },
            { title: "Choose the correct data type in your C# code", file: "/Achievements/Microsoft/BADGES/Choose_the_correct_data_type_in_your_CSharp_code.pdf" },
            { title: "Classify images", file: "/Achievements/Microsoft/BADGES/Classify_images.pdf" },
            { title: "Create business value from AI", file: "/Achievements/Microsoft/BADGES/Create_business_value_from_AI.pdf" },
            { title: "Describe monitoring tools in Azure", file: "/Achievements/Microsoft/BADGES/Describe_monitoring_tools_in_Azure.pdf" },
            { title: "Detect objects in images", file: "/Achievements/Microsoft/BADGES/Detect_objects_in_images.pdf" },
            { title: "Embrace responsible AI principles and practices", file: "/Achievements/Microsoft/BADGES/Embrace_responsible_AI_principles_and_practices.pdf" },
            { title: "Fundamentals of conversational language understanding", file: "/Achievements/Microsoft/BADGES/Fundamentals_of_conversational_language_understanding.pdf" },
            { title: "Fundamentals of language translation", file: "/Achievements/Microsoft/BADGES/Fundamentals_of_language_translation.pdf" },
            { title: "Get started with web development using Visual Studio Code", file: "/Achievements/Microsoft/BADGES/Get_started_with_web_development_using_Visual_Studio_Code.pdf" },
            { title: "Guided project - Develop foreach and if-elseif-else structures to process array data in C#", file: "/Achievements/Microsoft/BADGES/Guided_project_-_Develop_foreach_and_if-elseif-else_structures_to_process_array_data_in_CSharp.pdf" },
            { title: "Implement the Visual Studio Code debugging tools for C#", file: "/Achievements/Microsoft/BADGES/Implement_the_Visual_Studio_Code_debugging_tools_for_CSharp.pdf" },
            { title: "Introduction to AI-powered information extraction concepts", file: "/Achievements/Microsoft/BADGES/Introduction_to_AI-powered_information_extraction_concepts.pdf" },
            { title: "Introduction to generative AI concepts", file: "/Achievements/Microsoft/BADGES/Introduction_to_generative_AI_concepts.pdf" },
            { title: "Leverage AI tools and resources for your business", file: "/Achievements/Microsoft/BADGES/Leverage_AI_tools_and_resources_for_your_business.pdf" },
            { title: "Modify the content of strings using built-in string data type methods in C#", file: "/Achievements/Microsoft/BADGES/Modify_the_content_of_strings_using_built-in_string_data_type_methods_in_CSharp.pdf" },
            { title: "Monitor Azure AI services", file: "/Achievements/Microsoft/BADGES/Monitor_Azure_AI_services.pdf" },
            { title: "Scale AI in your organization", file: "/Achievements/Microsoft/BADGES/Scale_AI_in_your_organization.pdf" },
        ]
    },
    {
        category: "Microsoft Trophies",
        items: [
            { title: "Add logic to C# console applications Get started with C# Part 3", file: "/Achievements/Microsoft/TROPHY/Add_logic_to_CSharp_console_applications_Get_started_with_CSharp_Part_3.pdf" },
            { title: "AZ-305 Microsoft Azure Architect Design Prerequisites", file: "/Achievements/Microsoft/TROPHY/AZ-305_Microsoft_Azure_Architect_Design_Prerequisites.pdf" },
            { title: "Build web apps with ASP.NET Core for beginners", file: "/Achievements/Microsoft/TROPHY/Build_web_apps_with_ASP.NET_Core_for_beginners.pdf" },
            { title: "Copilot Foundations", file: "/Achievements/Microsoft/TROPHY/Copilot_Foundations.pdf" },
            { title: "Create and run simple C# console applications Get started with C# Part 2", file: "/Achievements/Microsoft/TROPHY/Create_and_run_simple_CSharp_console_applications_Get_started_with_CSharp_Part_2.pdf" },
            { title: "Create methods in C# console applications Get started with C# Part 5", file: "/Achievements/Microsoft/TROPHY/Create_methods_in_CSharp_console_applications_Get_started_with_CSharp_Part_5.pdf" },
            { title: "Create vision models with Azure AI Custom Vision", file: "/Achievements/Microsoft/TROPHY/Create_vision_models_with_Azure_AI_Custom_Vision.pdf" },
            { title: "Debug C# console applications Get started with C# Part 6", file: "/Achievements/Microsoft/TROPHY/Debug_CSharp_console_applications_Get_started_with_CSharp_Part_6.pdf" },
            { title: "Deploy and consume models with Azure Machine Learning", file: "/Achievements/Microsoft/TROPHY/Deploy_and_consume_models_with_Azure_Machine_Learning.pdf" },
            { title: "Develop AI agents on Azure", file: "/Achievements/Microsoft/TROPHY/Develop_AI_agents_on_Azure.pdf" },
            { title: "Develop generative AI apps in Azure", file: "/Achievements/Microsoft/TROPHY/Develop_generative_AI_apps_in_Azure.pdf" },
            { title: "Discover Microsoft AI for leaders in sustainability", file: "/Achievements/Microsoft/TROPHY/Discover_Microsoft_AI_for_leaders_in_sustainability.pdf" },
            { title: "Experiment with Azure Machine Learning", file: "/Achievements/Microsoft/TROPHY/Experiment_with_Azure_Machine_Learning.pdf" },
            { title: "Explore and configure the Azure Machine Learning", file: "/Achievements/Microsoft/TROPHY/Explore_and_configure_the_Azure_Machine_Learning.pdf" },
            { title: "Get started with Azure AI Services", file: "/Achievements/Microsoft/TROPHY/Get_started_with_Azure_AI_Services.pdf" },
            { title: "GitHub responsible AI", file: "/Achievements/Microsoft/TROPHY/GitHub_responsible_AI.pdf" },
            { title: "Introduction to AI in Azure", file: "/Achievements/Microsoft/TROPHY/Introduction_to_AI_in_Azure.pdf" },
            { title: "Manage and review models in Azure Machine Learning", file: "/Achievements/Microsoft/TROPHY/Manage_and_review_models_in_Azure_Machine_Learning.pdf" },
            { title: "Manage Authentication Authorization and RBAC for AI workloads on Azure", file: "/Achievements/Microsoft/TROPHY/Manage_Authentication_Authorization_and_RBAC_for_AI_workloads_on_Azure.pdf" },
            { title: "Microsoft Azure AI Fundamentals Generative AI", file: "/Achievements/Microsoft/TROPHY/Microsoft_Azure_AI_Fundamentals_Generative_AI.pdf" },
            { title: "Microsoft Azure AI Fundamentals ~ AI Overview", file: "/Achievements/Microsoft/TROPHY/Microsoft_Azure_AI_Fundamentals_~_AI_Overview.pdf" },
            { title: "Microsoft Azure AI Fundamentals ~ Computer Vision", file: "/Achievements/Microsoft/TROPHY/Microsoft_Azure_AI_Fundamentals_~_Computer_Vision.pdf" },
            { title: "Microsoft Azure AI Fundamentals ~ Natural", file: "/Achievements/Microsoft/TROPHY/Microsoft_Azure_AI_Fundamentals_~_Natural.pdf" },
            { title: "Microsoft Azure Fundamentals ~ Describe Azure architecture and services", file: "/Achievements/Microsoft/TROPHY/Microsoft_Azure_Fundamentals_~_Describe_Azure_architecture_and_services.pdf" },
            { title: "Microsoft Azure Fundamentals ~ Describe Azure management and governance", file: "/Achievements/Microsoft/TROPHY/Microsoft_Azure_Fundamentals_~_Describe_Azure_management_and_governance.pdf" },
            { title: "Microsoft Azure Fundamentals ~ Describe cloud concepts", file: "/Achievements/Microsoft/TROPHY/Microsoft_Azure_Fundamentals_~_Describe_cloud_concepts.pdf" },
            { title: "Minecraft Python coding academy", file: "/Achievements/Microsoft/TROPHY/Minecraft_Python_coding_academy.pdf" },
            { title: "Monitor AI workloads on Azure", file: "/Achievements/Microsoft/TROPHY/Monitor_AI_workloads_on_Azure.pdf" },
            { title: "Optimize model training with Azure Machine Learning", file: "/Achievements/Microsoft/TROPHY/Optimize_model_training_with_Azure_Machine_Learning.pdf" },
            { title: "Train and manage a machine learning model with Azure Machine Learning", file: "/Achievements/Microsoft/TROPHY/Train_and_manage_a_machine_learning_model_with_Azure_Machine_Learning.pdf" },
            { title: "Train models with scripts in Azure Machine Learning", file: "/Achievements/Microsoft/TROPHY/Train_models_with_scripts_in_Azure_Machine_Learning.pdf" },
            { title: "Transform your business with Microsoft AI", file: "/Achievements/Microsoft/TROPHY/Transform_your_business_with_Microsoft_AI.pdf" },
            { title: "Work with variable data in C# console applications Get started with C# Part 4", file: "/Achievements/Microsoft/TROPHY/Work_with_variable_data_in_CSharp_console_applications_Get_started_with_CSharp_Part_4.pdf" },
            { title: "Write your first code using C# Get started with C# Part 1", file: "/Achievements/Microsoft/TROPHY/Write_your_first_code_using_CSharp_Get_started_with_CSharp_Part_1.pdf" },
        ]
    },
    {
        category: "Qualcomm Badges",
        items: [
            { title: "AI Upskilling Badge", file: "/Achievements/Qualcomm/ai-upskilling-certificate-technical-foundations.png" },
        ]
    },

    // ==================== INTERNSHIP CERTIFICATES ====================
    {
        category: "Infosys Springboard Internships",
        items: [
            { title: "Internship 6.0 (B1): ImpactSense - Earthquake Impact Prediction", file: "/Achievements/Infosys%20Springboard/1-7201b116-4d59-4827-b05e-3b31e9a9f0fd.pdf" },
        ]
    },
    {
        category: "Oasis Infobyte",
        items: [
            { title: "Babin Bid Appreciation Certificate", file: "/Achievements/Oasis Infobyte/Babin_Bid_Appreciation_Certificate.pdf" },
            { title: "Babin Bid Certificate", file: "/Achievements/Oasis Infobyte/Babin_Bid_Certificate.pdf" },
        ]
    },
    {
        category: "The Developers Arena",
        items: [
            { title: "Data Science Internship Certificate", file: "/Achievements/The Developers Arena/Babin_Bid_Internship_Certificate.pdf" },
        ]
    },
];
