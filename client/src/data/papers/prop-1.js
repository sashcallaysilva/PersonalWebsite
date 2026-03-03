const prop1 = {
    id: "1",
    title: {
        en: "Proposal 1: Is Generative A.I. the Future of Education? The Risks Involved",
        es: "Propuesta 1: ¿Es la I.A. Generativa el Futuro de la Educación? Los Riesgos Involucrados"
    },
    author: "Sebastian Ashcallay Silva",
    date: {
        en: "Feb. 28, 2026, 5:00 PM EST",
        es: "28 de febrero de 2026, 5:00 PM EST"
    },
    banner: "/assets/papers/prop-1-banner.jpg",
    readingTime: {
        en: "20 min read",
        es: "20 min de lectura"
    },
    pdf: {
        en: "/assets/papers/prop-1.pdf",
        es: "/assets/papers/prop-1-es.pdf"
    },

    sections: {
        en: [

        // Intro
        {
            type: "paragraph",
            content:
            "The rapid emergence of generative artificial intelligence (GenAI)—a subset of AI that \"uses deep learning techniques to create new content such as images, music, animation, 3D models, and text\" (University of Illinois Urbana-Champaign, 2024)—has introduced a new wave of transformative tools into the school setting, with students reshaping what it means to learn, practice, and interact with educational content. From chatbot conversations in Gemini to personalized instruction in educational technology (EdTech) platforms like Duolingo and Khan Academy, GenAI has become substantial in providing students with instant feedback, step-by-step guidance, and access to a wide range of subjects beyond the traditional classroom."
        },

        {
            type: "paragraph",
            content:
            "On one hand, most EdTech platform companion tools that use GenAI are based on GPT (Generative Pre-trained Transformer) models, which use \"self-supervised learning to pre-train massive amounts of text data, enabling it to generate high-quality [responses]\" (Yenduri et al., 2024). In other words, these models are trained on large datasets that allow them to contextualize and answer user prompts. Despite delivering responses in seconds, the accuracy of GPT-generated output is not guaranteed, and errors in explanations are common. While the speed and availability of these tools offer students support at any time of day, they also carry the risk of undermining information recall and long-term retention."
        },

        {
            type: "pullquote",
            content:
            "GenAI delivers answers in seconds—but not necessarily understanding that lasts."
        },

        {
            type: "paragraph",
            content:
            "On the other hand, chatbots continue to be the most popular choice amongst most students. According to recent Pew Research Center surveys (2025), about 26% of U.S. teens say they have used ChatGPT to help with their schoolwork—doubling the share reported in 2023—and roughly 3 in 10 teens report using AI chatbots daily. In short, individualized support that can adapt to their pace, style, and needs has become the selling point of these technologies for middle and high school students—particularly those in grades 8 through 12—as reflected in recent usage trends."
        },

        {
            type: "paragraph",
            content:
            "Nonetheless, the other side of the coin points to concerning limitations posing a risk to students' learning retention: a lack of contextual awareness, hallucinations, occasional inaccuracies, and a focus on providing answers rather than fostering deep understanding. Misperceptions about the reliability of AI, coupled with an incomplete oversight and guidance from educational institutions, can lead students to rely too heavily on these tools and potentially undermine their critical thinking and problem-solving skills."
        },

        {
            type: "paragraph",
            content: "This analysis examines the risks of GenAI across K-12 classrooms, with particular attention to grades 5-12, highlighting factors that affect student learning retention and the gaps between technological capability and educational outcomes."
        },

        // HEADING: IMPORTANCE OF LEARNING RETENTION

        {
            type: "heading",
            content: "The Importance of Learning Retention"
        },

        {
            type: "paragraph",
            content:
            "Learning retention consists of recalling information about a given subject and is typically assessed in school through comprehensive exams (e.g., end-of-unit quizzes). Its importance lies in the foundational skills students build while contemplating the next semester, the next school year, and situations beyond these formative years (MIT Teaching + Learning Lab, 2026)."
        },

        {
            type: "paragraph",
            content:
            "Three learning strategies are suggested to report learning retention: (1) leveraging a student's prior knowledge, (2) engaging students in the retrieval of previously learned information, and (3) promoting deep understanding through self-explanation (MIT Teaching + Learning Lab, 2026). The following paragraphs will discuss how GenAI tools pose risks to these strategies and what consequences could lie ahead."
        },

        // HEADING: THE RISKS

        {
            type: "heading",
            content: "The Risks"
        },

        // // SUBHEADING: LIMITED REFLECTION OF STUDENT THINKING IN AI FEEDBACK
        {
            type: "subheading",
            content: "Limited Reflection of Student Thinking in AI Feedback"
        },

        {
            type: "paragraph",
            content:
            "One of the main issues with GenAI tools, even those provided by EdTech companies, is the inability to accurately reflect students' thinking in their responses. For instance, in an article written by high school teacher Dan Meyer (2024), he asserts that Khan Academy feeds student thinking into the platform's GenAI tool, Khanmigo, \"only sometimes and only sometimes accurately.\" Meyer also highlights how Khanmigo usually begins user interaction with the same type of prompt, questions students about basic steps even after demonstrating understanding, and dismisses what the students did correctly."
        },

        {
            type: "paragraph",
            content:
            "More broadly, research shows that \"several critical issues which hinder the practicality of GenAI technologies for feedback provision,\" including reliability (e.g., hallucinations), accuracy for \"authentic learning environments,\" and acceptance amongst students (Li et al., 2025)."
        },

        {
            type: "pullquote",
            content:
            "When students feel misunderstood by AI, they disengage from learning itself."
        },

        {
            type: "paragraph",
            content: "These problems can lead to students' frustration or disengagement with the study material as their correct reasoning is overlooked, reducing confidence and willingness to solve challenging problems later. In college, being unable to use \"key cognitive strategies\" such as analysis and reasoning can lead to a student underperforming in their classes (Conley, 2007)."
        },

        // // SUBHEADING: INCREASING DEPENDENCY ON GENAI

        {
            type: "subheading",
            content: "Increasing Dependency on GenAI"
        },

        {
            type: "paragraph",
            content:
            "As noted by Monash University researcher Lixiang Yan (2024), overreliance on GenAI \"for learning content creation […] without validation could introduce inaccuracies, misleading both educators and students.\" For instance, if students typically use a chatbot to summarize texts or generate responses for assignments, their independent analysis skills may diminish over time. Understanding that platforms like Khan Academy and Duolingo leverage large language models (LLMs) such as those developed by OpenAI—including models that power ChatGPT—we can expect similar intrinsic flaws to manifest in their respective EdTech tools."
        },

        {
            type: "paragraph",
            content:
            "Regarding this ongoing concern, a recent study published in Proceedings of the National Academy of Sciences (PNAS) found that while GenAI tools can \"substantially improve human performance when access [to them] is available, they can also degrade human learning (particularly when appropriate safeguards are absent), which may have a long-term impact on human performance\" (Bastani et al., 2025)."
        },

        {
            type: "paragraph",
            content:
            "This dynamic relates to what recent literature describes as an \"agency gap,\" the extent to which GenAI literacy predicts student writing performance in contexts that require self-initiation and regulation (Jin et al., 2025)."
        },

        // // SUBHEADING: SUPERFICIAL LEARNING OVER DEEP UNDERSTANDING

        {
            type: "subheading",
            content: "Superficial Learning Over Deep Understanding"
        },

        {
            type: "paragraph",
            content:
            "As noted in a recent report published by Microsoft Research, \"GenAI's productivity improvements in industry might not be desirable in education settings,\" where the focus is centered more on fostering critical thinking and social learning than on finishing tasks faster (Walker & Vorvoreanu, 2025). Inside the classroom setting, general-use GenAI tools supply quick answers to complex questions, but the lack of teacher intervention doesn't help students avoid receiving inaccurate responses, biases, or wrong feedback (University of Cincinnati Libraries, 2025). Not only are students tempted to get satisfying results quickly, but they also conform to the arbitrary perception of GenAI being always correct, as previously pointed out."
        },

        {
            type: "paragraph",
            content:
            "Research suggests that students often prioritize efficiency and convenience when using GenAI, even when they recognize that such use may not benefit their long-term learning:"
        },

        {
            type: "blockquote",
            content: "\“We found that students have misconceptions about what GenAI is, even when they use it frequently, and largely see it as a tool for making things more efficient. They are also conflicted by its use as they see its benefits but realize it might impede learning. Ideally, they want GenAI to be a coach or tutor that can personalize the learning experience for them.\"",
            attribution: "Johri et al., 2024"
        },

        {
            type: "paragraph",
            content:
            "Moreover, when these flaws go unrecognized, they can foster a dangerous misconception that ultimately leads to academic underperformance. For example, the PNAS study identified a \"mismatch between perceived and actual learning,\" most noticeably in students learning with access to a base GPT model without safeguards, who performed 17% worse on average compared to the control group (Bastani et al., 2025). This misconception can extend beyond students to educators who integrate these tools without fully accounting for their limitations."
        },

        {
            type: "paragraph",
            content: "Finally, in EdTech platforms like Duolingo, the use of chatbots comes with features that allow users to skip through automated feedback, where—unlike in-person tutoring or traditional self-studying—students continue to separate themselves from a problem-solving process that is still “unclear” to them. This can lead to knowledge gaps throughout the school year and increase cognitive bias. Maintaining these problems beyond high school may hinder job expectations and not prepare students enough to tackle harder courses in college, where GenAI typically cannot answer questions as accurately."
        },

        {
            type: "pullquote",
            content:
            "Students who feel satisfied after using GenAI tools don't necessarily perform better academically."
        },

        // // SUBHEADING: ACADEMIC INTEGRITY AND THE MISUSE OF GENAI

        {
            type: "heading",
            content: "Academic Integrity and the Misuse of GenAI"
        },

        {
            type: "paragraph",
            content:
            "Along with learning retention, GenAI introduces significant challenges related to academic integrity, particularly when students use these tools to complete assignments with minimal independent effort. Academic integrity is defined—in this case—as acting with \"honesty, trust, fairness, respect, responsibility, and courage\" (International Center for Academic Integrity), values compromised as GenAI tools become more integrated into daily schoolwork."
        },

        {
            type: "paragraph",
            content:
            "On this same note, according to a recent UNESCO report, \“GenAI might allow students to pass off text that they did not write as their own work, a [novel] type of 'plagiarism'\” (Miao & Holmes, 2023). The same report notes that, despite efforts such as AI-generated content watermarks and detection tools, there is still little evidence that these measures or tools are effective. As a result, the boundary between assistance and substitution becomes increasingly unclear."
        },

        {
            type: "paragraph",
            content: "As students rely on GenAI to generate responses, summarize content, or complete assignments, they may shift away from producing original work toward curating AI-generated outputs, blurring authorship and accountability. Over time, this not only undermines the principles of academic integrity but also reinforces patterns of overreliance and superficial engagement, where the focus shifts from learning and understanding to efficiency and task completion."
        },

        // HEADING: ADDRESSING THE PROBLEM
        {
            type: "heading",
            content: "Addressing the Problem"
        },

        {
            type: "paragraph",
            content: "Some solutions currently being considered include active user engagement and scaffolding learning—where guidance and support are gradually removed \"as students learn and become more competent\" (University at Buffalo, 2024). While these solutions align with established learning science principles, they remain insufficient to fully mitigate the risks to learning retention previously outlined. Thus, a more targeted set of measures can be proposed to improve the outlook of GenAI-powered tools in education."
        },

        // // SUBHEADING: HUMAN-AI COLLABORATION

        {
            type: "subheading",
            content: "Human-AI Collaboration"
        },

        {
            type: "paragraph",
            content:
            "Creating a hybrid model in which educators serve as middlemen in AI-student interactions can help address several of the identified risks. This includes both teachers using GenAI tools to enhance the quality of their feedback and directly overseeing how students interact with these systems."
        },

        {
            type: "paragraph",
            content: "For example, recent research shows that \"GenAI-enabled natural-language insights significantly improved educators' feedback quality compared to educators without AI support\" (Li et al., 2025). Rather than replacing teachers, these systems can become assistive tools to help interpret student responses more efficiently while still maintaining human judgment."
        },

        {
            type: "paragraph",
            content: "Likewise, a more direct teacher oversight approach allows for the correction of inaccurate or misleading AI responses, while also enabling educators to evaluate whether a student's reasoning is being properly reflected in the feedback they receive. We describe this approach as teacher-in-the-loop AI systems—middleware frameworks that allow teachers to monitor student interactions, influence or constrain AI outputs, and detect behaviors like copy-pasting. Complementary implementations, such as teaching-facing dashboards, can further provide real-time insights into student engagement and reasoning patterns, allowing educators to intervene when necessary and ensure that AI-supported learning remains aligned with instructional goals."
        },

        // // SUBHEADING: WELL-DEFINED EDUCATIONAL POLICIES

        {
            type: "subheading",
            content: "Well-Defined Educational Policies"
        },

        {
            type: "paragraph",
            content:
            "Instructional guidance is necessary to regulate how GenAI tools are used in educational settings, beyond the classroom-level interventions. While EdTech companies are increasingly transparent about the limitations of their systems, many school districts still lack clearly defined policies for responsible AI use. This creates ambiguity for both students and educators, particularly in distinguishing between acceptable assistance and academic misconduct. According to UNESCO, GenAI systems may enable students to present AI-generated content as their own, raising concerns about authorship and accountability (Miao & Holmes, 2023)."
        },

        {
            type: "paragraph",
            content: "To address this, local school districts have begun implementing comprehensive guidelines that define appropriate use cases for GenAI, establish boundaries for academic integrity, and promote AI literacy among students and staff. While these efforts represent meaningful progress, policies should further emphasize verification practices—encouraging students to corroborate AI-generated information with trusted sources—and require transparency when AI tools are used in assignments. Additionally, these guidelines should be made readily accessible to parents and families to ensure that responsible usage extends beyond the classroom."
        },

        {
            type: "paragraph",
            content: "For instance, one of the most established school districts in the state of Maryland, Montgomery County Public Schools, manages an Online Digital Tools Database that lists approval status (approved, use responsibly, or prohibited), their privacy policy and terms of service, as well as usage recommendations. Building on this model, districts should introduce specific guidelines for standalone chatbot platforms (e.g., ChatGPT, Gemini), along with clear disclaimers regarding the use of embedded AI features within educational applications such as Duolingo or Khan Academy." 
        },

        {
            type: "paragraph",
            content: "Finally, this process can be strengthened through structured input from parents and guardians—such as suggesting new platforms for review—while assigning district officials the responsibility of maintaining and regularly updating these resources. A more informed school ecosystem can deter potential misuse of these tools."
        },

        // // SUBHEADING: EDTECH-SCHOOL COLLABORATION

        {
            type: "subheading",
            content: "EdTech-School Collaboration"
        },

        {
            type: "paragraph",
            content:
            "Another key approach involves closer collaboration between EdTech companies and school districts to ensure that GenAI tools align with curricular goals and educational standards. Rather than deploying generalized AI systems, companies can work with educators to fine-tune models based on specific learning goals, classroom contexts, and student needs. This partnership model enables long-term evaluation of how GenAI affects student learning outcomes, particularly in areas such as retention and critical thinking."
        },
        
        {
            type: "paragraph",
            content: "An early example of this initiative can be seen in Newark, New Jersey, where the local Board of Education approved \"a data-sharing agreement with Khan Academy to study whether [their GenAI-powered tutor, Khanmigo,] was effective 'in the North Ward schools'\" (Gomez, 2024). As part of this initiative, researchers analyze state testing data to determine how the use of the companion tool correlates with student growth and academic achievement in grades 5-8 (and later 3-8). The implementation began as a pilot program in 2023 within a subset of schools in Newark's North Ward district, before expanding to dozens of schools and reaching tens of thousands of students—demonstrating a scalable, phased adoption model."
        },

        {
            type: "paragraph",
            content: "Beyond evaluation, this collaboration also emphasizes how GenAI can be meaningfully integrated into classroom instruction. Particularly, teachers have used Khanmigo to augment their teaching by generating lesson materials, drafting problem sets, and tailoring content to student interests—for instance, creating algebra problems based on familiar cultural references like Pokémon (Khan Academy, 2026). Moving forward, this type of collaboration allows districts to move beyond assumptions about GenAI's effectiveness and instead rely on empirical evidence to guide pro-learning-retention adoption. This also allows tools that have initial focus problems, such as Khanmigo, to cope over time (e.g., from 2024 to 2026) by learning from this same evidence and refining their parameters to align their internal GPT model with the goals of educational institutions."
        },

        // // SUBHEADING: CONSTRAINED AI DESIGN FOR ACTIVE LEARNING

        {
            type: "subheading",
            content: "Constrained AI Design for Active Learning"
        },

        {
            type: "paragraph",
            content:
            "In addition to external oversight and policy measures, the design of GenAI systems themselves can be modified to better support learning retention. One promising approach is to shift from answer-generating systems to guided Socratic-style tutors that prioritize student engagement over efficiency, as seen recently in emerging implementations from different web platforms. This specific teaching style is associated with active learning, an approach \"in which all students are asked to engage in the learning process\" (University of Minnesota, Twin Cities, 2026)."
        },

        {
            type: "pullquote",
            content:
            "GenAI without guardrails can compromise learning retention."
        },

        {
            type: "paragraph",
            content: "For instance, Khan Academy's Khanmigo is intentionally structured to act as a Socratic tutor rather than a solution engine: it guides students through problems step-by-step, asks probing questions, and often refuses to provide direct answers outright. Similarly, tools associated with Duolingo Max, an AI-powered subscription plan from Duolingo, incorporate features such as \"Explain My Answer,\" which encourages learners to reflect on mistakes instead of passively receiving corrections. These modes demonstrate how AI can be deliberately constrained to reinforce learning behaviors rather than bypass them."
        },

        {
            type: "paragraph",
            content: "Similarly, across emerging GenAI tools, there is a growing shift toward \"guided interaction modes\"—including Socratic tutoring (Quizlet Q-Chat), step-by-step reasoning (Photomath), and scaffolded hints (Carnegie Learning). These design choices acknowledge that unrestricted answer generation can undermine learning retention, prompting developers to instead incorporate constraints that encourage active engagement."
        },

        {
            type: "paragraph",
            content: "In synthesis, as seen in other proposed measures, constrained AI design is already making its way into the tools students and instructors use daily."
        },

        // CLOSURE
        {
            type: "heading",
            content: "Closure"
        },

        {
            type: "paragraph",
            content:
            "GenAI tools, particularly those offered by EdTech companies, present exciting possibilities for the future of education, but are still far from perfect in supporting long-term knowledge retention. As these systems become more embedded in classrooms, it is critical that their design prioritizes human-centered learning—through guided interaction, teacher involvement, and structured constraints—rather than unrestricted answer generation. Without these safeguards, students risk becoming dependent on AI in ways that compromise their critical thinking, ability to retain information, and engagement in independent problem-solving. These consequences extend beyond the classroom, affecting students' preparedness for the intellectual demands of higher education and the adaptability required in the modern workforce. Ultimately, the success of GenAI in education will not be determined by how efficiently it delivers answers, but by how effectively it supports sustained learning retention during students' formative years, and via the collaborative effort of students, families, schools, and GenAI tool providers."
        },

        // WORKS CITED
        {
            type: "heading",
            content: "Works Cited"
        },

        {
            type: "list",
            items: [
                "Bastani, H., Bastani, O., Sungu, A., Ge, H., Kabakci, O., & Mariman, R. (2025, June 25). Generative AI without guardrails can harm learning: Evidence from high school mathematics. Retrieved from Proceedings of the National Academy of Sciences of the United States of America (PNAS): https://www.pnas.org/doi/10.1073/pnas.2422633122",
                "Duolingo Team. (2023, March 14). Introducing Duolingo Max, A Learning Experience Powered by GPT-4. Retrieved from Duolingo Blog: https://blog.duolingo.com/duolingo-max/",
                "Duranton, S. (2023, March 27). Humans in the GenAI Loop. Retrieved from Forbes: https://www.forbes.com/sites/sylvainduranton/2023/03/27/humans-in-the-genai-loop/",
                "Gomez, J. (2024, May 13). Newark Public Schools considers new AI tutor chatbot for districtwide use after pilot testing. Retrieved from Chalkbeat: https://www.chalkbeat.org/newark/2024/05/13/artificial-intelligence-khanmigo-chatbot-tutor-pilot-testing-districtwide-expansion/",
                "Grassini, S. (2023, July 7). Shaping the Future of Education: Exploring the Potential and Consequences of AI and ChatGPT in Educational Settings. Retrieved from MDPI: https://doi.org/10.3390/educsci13070692",
                "International Center for Academic Integrity. (2026, February 28). Welcome to ICAI. Retrieved from ICAI: https://www.academicintegrity.org/aws/ICAI/pt/sp/home_page",
                "Jin, Y., Yang, K., Martinez-Maldonado, R., Gasevic, D., & Yan, L. (2025, October 16). The Agency Gap: How Generative AI Literacy Shapes Independent Writing after AI Support. Retrieved from Arxiv: https://arxiv.org/pdf/2507.04398",
                "Johri, A., Hingle, A., & Schleiss, J. (2024, October 29). Misconceptions, Pragmatism, and Value Tensions: Evaluating Students' Understanding and Perception of Generative AI for Education. Retrieved from Arxiv: https://arxiv.org/abs/2410.22289",
                "Khan Academy. (2026, February 28). Newark Public Schools partners with Khan Academy to boost math proficiency. Retrieved from Khan Academy Districts: https://www.khanacademy.org/schools/case-studies/newark-public-schools",
                "Khan Academy Team. (2024, January 4). Four Stars for Khanmigo: Common Sense Media Rates AI Tools for Learning. Retrieved from Khan Academy Blog: https://blog.khanacademy.org/four-stars-for-khanmigo-common-sense-media-rates-ai-tools-for-learning-kp/",
                "Khan Academy Team. (2024, May 17). Why We're Deeply Invested in Making AI Better at Math Tutoring (and What We've Been Up to Lately). Retrieved from Khan Academy Blog: https://blog.khanacademy.org/why-were-deeply-invested-in-making-ai-better-at-math-tutoring-and-what-weve-been-up-to-lately/",
                "Li, Y., Shan, Z., Rakovic, M., Guan, Q., Gasevic, D., & Guanliang, C. (2025, September 8). When AI explains in natural language: Unveiling the impact of generative AI explanations on educators' grading and feedback practices. Retrieved from Springer Nature: https://link.springer.com/article/10.1007/s10639-025-13741-z",
                "Mendes, V. M. (2023, September 5). Do we need to call for a more cautious approach to generative AI in education? Retrieved from UNESCO: https://world-education-blog.org/2023/09/05/do-we-need-to-call-for-a-more-cautious-approach-to-generative-ai-in-education/",
                "Meyer, D. (2024, April 17). Khanmigo WANTS to Love Kids but Doesn't Know How. Retrieved from Mathworlds: https://danmeyer.substack.com/p/khanmigo-wants-to-love-kids-but-doesnt",
                "MIT Teaching + Learning Lab. (2026, February 28). Help Students Retain, Organize and Integrate Knowledge. Retrieved from MIT: https://tll.mit.edu/teaching-resources/how-to-teach/help-students-retain-organize-and-integrate-knowledge/",
                "Montgomery County Public Schools. (2026, February 28). Data Privacy and Security. Retrieved from MCPS: https://www.montgomeryschoolsmd.org/data-privacy-security/technology/",
                "Mook, B. (2024, August 13). How students should — and shouldn't — use artificial intelligence. Retrieved from MSU Denver RED: https://red.msudenver.edu/2024/how-students-should-and-shouldnt-use-artificial-intelligence/",
                "Own Your AI. (2026, February 28). Configuring and Monitoring Students' Interactions with Generative AI Tools: Supporting Teacher Autonomy. Retrieved from Own Your AI: https://ownyourai.com/configuring-and-monitoring-students-interactions-with-generative-ai-tools-supporting-teacher-autonomy/",
                "Srivastava, N., Jain, S., Cohn, C., Mohammed, N., Timalsina, U., & Biswas, G. (2025, September 11). LearnLens: An AI-Enhanced Dashboard to Support Teachers in Open-Ended Classrooms. Retrieved from Arxiv: https://arxiv.org/abs/2509.10582",
                "Tong, R. (2023, 17 April). Khanmigo is great but NOT ready to tutor student. Retrieved from LinkedIn: https://www.linkedin.com/pulse/khanmigo-great-ready-tutor-student-richard-tong",
                "UNESCO. (2023). Guidance for generative AI in education and research. Retrieved from UNESCO Digital Library: https://unesdoc.unesco.org/ark:/48223/pf0000386693",
                "University of Cincinnati Libraries. (2025, October 21). AI Tools for Education — Khanmigo. Retrieved from University of Cincinnati: https://guides.libraries.uc.edu/ai-education/kh",
                "University of Illinois Urbana-Champaign. (2024, November 11). Traditional AI vs. Generative AI: What's the Difference? Retrieved from College of Education: https://education.illinois.edu/about/news-events/news/article/2024/11/11/what-is-generative-ai-vs-ai",
                "University of Minnesota, Twin Cities. (2026, February 28). Active Learning. Retrieved from Center for Educational Innovation: https://cei.umn.edu/teaching-resources/active-learning",
                "Walker, K., & Vorvoreanu, M. (2025, December 16). Learning outcomes with GenAI in the classroom: A review of empirical evidence. Retrieved from AI Ethics and Effects in Engineering and Research (Microsoft): https://www.microsoft.com/en-us/research/wp-content/uploads/2025/10/GenAILearningOutcomes_published_2025-12-16.pdf",
                "Yan, L., Greiff, S., Teuber, Z., & Gasvic, D. (2024, October 22). Promises and challenges of generative artificial intelligence for human learning. Retrieved from Nature Human Behaviour: https://www.nature.com/articles/s41562-024-02004-5",
                "Yenduri, G., Murugan, R., Govardanan, C. S., Supriya, Y., Reddy, P. K., Raj, D., . . . Gadekallu, T. R. (2024, January). GPT (Generative Pre-Trained Transformer)— A Comprehensive Review on Enabling Technologies, Potential Applications, Emerging Challenges, and Future Directions. Retrieved from Research Gate: https://www.researchgate.net/publication/379857733_GPT_Generative_Pre-trained_Transformer_-_A_Comprehensive_Review_on_Enabling_Technologies_Potential_Applications_Emerging_Challenges_and_Future_Directions"
            ]
        }
        ],
        es: [

        // Intro
        {
            type: "paragraph",
            content:
            "La aparición rápida de la inteligencia artificial generativa (IAG)—un subconjunto de la IA que \"utiliza técnicas de aprendizaje profundo [(deep learning)] para crear contenido nuevo como imágenes, música, animación, modelos 3D y texto\" (Universidad de Illinois en Urbana-Champaign, 2024)—ha introducido una nueva ola de herramientas transformadoras en el entorno escolar, con estudiantes volviendo a definir lo que significa aprender, practicar e interactuar con contenido educativo. Desde conversaciones de chatbots (simuladores de conversación) como Gemini hasta instrucción personalizada en plataformas de tecnología educativa (EdTech) como Duolingo y Khan Academy, la IAG ha adquirido una importancia crucial al proporcionar a los estudiantes retroalimentación instantánea, orientación paso a paso y acceso a una amplia gama de temas más allá del aula tradicional."
        },

        {
            type: "paragraph",
            content:
            "Por un lado, la mayoría de las herramientas complementarias de las plataformas EdTech que utilizan la IAG se basan en modelos GPT (Transformador Generativo Preentrenado), que utilizan el \"aprendizaje autosupervisado para preentrenar cantidades masivas de datos de texto, permitiendo la generación de [respuestas] de alta calidad\" (Yenduri et al., 2024). En otras palabras, estos modelos se entrenan con grandes conjuntos de datos que les permiten contextualizar y responder a las preguntas del usuario. A pesar de ofrecer respuestas en segundos, la precisión de los resultados generados por modelos GPT no está garantizada, y los errores en las explicaciones son comunes. Si bien la velocidad y la disponibilidad de estas herramientas ofrecen a los estudiantes apoyo en cualquier momento del día, también conllevan el riesgo de afectar la capacidad de recordar y retener la información a largo plazo."
        },

        {
            type: "pullquote",
            content:
            "La IAG ofrece respuestas en segundos—pero no necesariamiento conocimiento duradero"
        },

        {
            type: "paragraph",
            content:
            "Por otro lado, los chatbots siguen siendo la opción más popular entre la mayoría de los estudiantes estadounidenses. Según encuestas recientes del Pew Research Center (2025), alrededor del 26 % de los adolescentes estadounidenses afirman haber utilizado ChatGPT para ayudar con sus tareas, el doble de la proporción reportada en 2023, y aproximadamente 3 de cada 10 adolescentes afirman utilizar chatbots de IA a diario. En resumen, el apoyo individualizado que se adapta al ritmo, estilo y necesidades de uno se ha convertido en el atractivo de estas tecnologías para los estudiantes de secundaria y preparatoria, en particular para los de 8.º a 12.º grado, como lo reflejan las tendencias de uso recientes."
        },

        {
            type: "paragraph",
            content:
            "Sin embargo, la otra cara de la moneda señala limitaciones preocupantes que ponen en riesgo la retención del aprendizaje de los estudiantes: falta de conciencia contextual, alucinaciones, imprecisiones ocasionales y un enfoque en proporcionar respuestas en lugar de fomentar una comprensión profunda. Las percepciones erróneas sobre la fiabilidad de la IA, junto con una supervisión y orientación incompletas por parte de las instituciones educativas, pueden llevar a los estudiantes a depender excesivamente de estas herramientas y, potencialmente, debilitar su pensamiento crítico y sus habilidades de resolución de problemas."
        },

        {
            type: "paragraph",
            content: "Este análisis examina los riesgos de la IAG en las aulas de primaria, secundaria y preparatoria, con un enfoque especial a los grados 5.º a 12.º, destacando los factores que afectan la retención del aprendizaje de los estudiantes y las brechas entre la capacidad tecnológica y los resultados educativos."
        },

        // HEADING: IMPORTANCE OF LEARNING RETENTION

        {
            type: "heading",
            content: "La importancia de la retención del aprendizaje"
        },

        {
            type: "paragraph",
            content:
            "La retención del aprendizaje consiste en recordar información sobre un tema determinado y suele evaluarse en la escuela mediante exámenes exhaustivos (p. ej., evaluaciones sumativas). Su importancia radica en las habilidades fundamentales que los estudiantes desarrollan al contemplar el siguiente semestre, el próximo año escolar y situaciones posteriores a estos años formativos (MIT Teaching + Learning Lab, 2026)."
        },

        {
            type: "paragraph",
            content:
            "Se sugieren tres estrategias de aprendizaje para reportar la retención del aprendizaje: (1) aprovechar los conocimientos previos del estudiante, (2) involucrar a los estudiantes en la recuperación de información previamente aprendida y (3) promover una comprensión profunda mediante la autoexplicación (MIT Teaching + Learning Lab, 2026). Los siguientes párrafos analizarán cómo las herramientas de IAG plantean riesgos para estas estrategias y qué consecuencias podrían surgir."
        },

        // HEADING: THE RISKS

        {
            type: "heading",
            content: "Los riesgos"
        },

        // // SUBHEADING: LIMITED REFLECTION OF STUDENT THINKING IN AI FEEDBACK
        {
            type: "subheading",
            content: "Reflexión limitada del pensamiento de los estudiantes en la retroalimentación de la IAG"
        },

        {
            type: "paragraph",
            content:
            "Uno de los principales problemas de las herramientas de IAG, incluso las proporcionadas por empresas EdTech, es la incapacidad de reflejar con precisión el pensamiento de los estudiantes en sus respuestas. Por ejemplo, en un artículo escrito por el profesor de secundaria Dan Meyer (2024), afirma que Khan Academy incorpora el pensamiento de los estudiantes mediante Khanmigo, la herramienta de IAG de la plataforma, \"solo a veces y solo a veces con precisión\". Meyer también destaca cómo Khanmigo suele iniciar la interacción del usuario con el mismo tipo de indicación, pregunta a los estudiantes sobre los pasos básicos incluso después de demostrar comprensión sobre el tema y descarta lo que hicieron correctamente."
        },

        {
            type: "paragraph",
            content:
            "En términos más generales, las investigaciones muestran que existen varios problemas críticos que dificultan la viabilidad de las tecnologías de IAG para la retroalimentación, como la fiabilidad (p. ej., alucinaciones), la precisión para entornos de aprendizaje auténticos y la aceptación entre los estudiantes (Li et al., 2025)."
        },

        {
            type: "pullquote",
            content:
            "Cuando los estudiantes se sienten incomprendidos for la IA, se desasocian del aprendizaje en sí."
        },

        {
            type: "paragraph",
            content: "Estos problemas pueden provocar frustración o desconexión con el material de estudio, ya que se pasa por alto su razonamiento correcto, lo que reduce la confianza y la disposición para resolver problemas complejos posteriormente. En la universidad, la incapacidad de utilizar estrategias cognitivas clave, como el análisis y el razonamiento, puede llevar a un bajo rendimiento académico (Conley, 2007)."
        },

        // // SUBHEADING: INCREASING DEPENDENCY ON GENAI

        {
            type: "subheading",
            content: "Dependencia creciente de la IAG"
        },

        {
            type: "paragraph",
            content:
            "Como señala Lixiang Yan, investigador de la Universidad de Monash (2024), la dependencia excesiva de la IAG \"para la creación de contenido de aprendizaje […] sin validación podría generar imprecisiones, lo que podría confundir tanto a educadores como a estudiantes\". Por ejemplo, si los estudiantes suelen usar un chatbot para resumir textos o generar solucionarios, sus habilidades de análisis independiente pueden disminuir con el tiempo. Teniendo en cuenta que plataformas como Khan Academy y Duolingo utilizan grandes modelos lingüísticos (LLM) como los desarrollados por OpenAI, incluidos los modelos que impulsan ChatGPT, cabe esperar que se manifiesten fallas intrínsecas similares en sus respectivas herramientas de tecnología educativa."
        },

        {
            type: "paragraph",
            content:
            "En relación con esta preocupación constante, un estudio reciente publicado en Proceedings of the National Academy of Sciences (PNAS) concluyó que, si bien las herramientas de IAG pueden \"mejorar sustancialmente el rendimiento humano cuando se tiene acceso a ellas, también pueden degradar el aprendizaje humano (en particular cuando no se cuenta con las medidas de seguridad adecuadas), lo que puede tener un impacto a largo plazo en el rendimiento humano\" (Bastani et al., 2025)."
        },

        {
            type: "paragraph",
            content:
            "Esta dinámica se relaciona con lo que la literatura reciente describe como una \"brecha de agencia\" o \"brecha de autonomía\": el grado en que el conocimiento práctico de la IAG predice el desempeño de los estudiantes en la escritura en contextos que requieren autoiniciación y regulación (Jin et al., 2025)."
        },

        // // SUBHEADING: SUPERFICIAL LEARNING OVER DEEP UNDERSTANDING

        {
            type: "subheading",
            content: "Aprendizaje superficial por encima de la comprensión profunda"
        },

        {
            type: "paragraph",
            content:
            "Como se señala en un informe reciente publicado por Microsoft Research, \"las mejoras de productividad de la IAG en [el entorno industrial] podrían no ser deseables en entornos educativos\", donde el enfoque se centra más en fomentar el pensamiento crítico y el aprendizaje social que en completar las tareas con mayor rapidez (Walker y Vorvoreanu, 2025). Dentro del salón, las herramientas de IAG de uso general proporcionan respuestas rápidas a preguntas complejas, pero la falta de intervención por parte de los profesores no ayuda a los estudiantes a evitar respuestas inexactas, sesgos o retroalimentación errónea (Bibliotecas de la Universidad de Cincinnati, 2025). Los estudiantes no solo se ven tentados a obtener resultados satisfactorios rápidamente, sino que también se conforman con la percepción arbitraria de que la IAG siempre es correcta, como se señaló anteriormente."
        },

        {
            type: "paragraph",
            content:
            "Las investigaciones sugieren que los estudiantes a menudo priorizan la eficiencia y la comodidad al usar la IAG, incluso cuando reconocen que dicho uso podría no beneficiar su aprendizaje a largo plazo:"
        },

        {
            type: "blockquote",
            content: "\“Descubrimos que los estudiantes tienen ideas erróneas sobre qué es la IAG, incluso cuando lo usan con frecuencia, y lo ven principalmente como una herramienta para mejorar la eficiencia. También se sienten inseguros con su uso, ya que ven sus ventajas, pero se dan cuenta de que podría obstaculizar el aprendizaje. Idealmente, desean que la IAG sea un coach o tutor que pueda personalizar su experiencia de aprendizaje para ellos\".",
            attribution: "Johri et al., 2024"
        },

        {
            type: "paragraph",
            content:
            "Además, cuando estas deficiencias pasan desapercibidas, pueden fomentar una idea errónea peligrosa que, en última instancia, conduce a un bajo rendimiento académico. Por ejemplo, el estudio de PNAS identificó una \"discordancia entre el aprendizaje percibido y el real\", más notoria en estudiantes que aprenden con acceso a un modelo GPT básico sin medidas de seguridad, cuyo rendimiento promedio fue un 17 % inferior al del grupo de control (Bastani et al., 2025). Esta idea errónea puede extenderse más allá de los estudiantes, incluso a los educadores que integran estas herramientas sin tener plenamente en cuenta sus limitaciones."
        },

        {
            type: "paragraph",
            content: "Finalmente, en plataformas de tecnología educativa como Duolingo, el uso de chatbots incluye funciones que permiten a los usuarios omitir la retroalimentación automatizada. De esta manera, a diferencia de las tutorías presenciales o el autoaprendizaje tradicional, los estudiantes continúan desvinculándose de un proceso de resolución de problemas que aún no les resulta claro. Esto puede generar lagunas de conocimiento a lo largo del curso escolar y aumentar el sesgo cognitivo. Mantener estos problemas después de la secundaria puede afectar las expectativas laborales y no preparar a los estudiantes lo suficiente para abordar cursos más difíciles en la universidad, donde la IAG no tiene el mismo poder de responder preguntas con la misma precisión."
        },

        {
            type: "pullquote",
            content:
            "Estudiantes que se sienten satisfechos tras usar herramientas de IAG no necesariamente rinden mejor académicamente."
        },

        // // SUBHEADING: ACADEMIC INTEGRITY AND THE MISUSE OF GENAI

        {
            type: "heading",
            content: "Integridad académica y el mal uso de la IAG"
        },

        {
            type: "paragraph",
            content:
            "Además de la retención del aprendizaje, la IAG presenta desafíos significativos sobre la integridad académica, particularmente cuando los estudiantes utilizan estas herramientas para completar tareas con un esfuerzo independiente mínimo. La integridad académica se define, en este caso, como actuar con \"honestidad, confianza, equidad, respeto, responsabilidad y valentía\" (Centro Internacional para la Integridad Académica), valores que se ven comprometidos a medida que las herramientas de IAG se integran más en las tareas escolares diarias."
        },

        {
            type: "paragraph",
            content:
            "En este mismo sentido, según un informe reciente de la UNESCO, \"la IAG podría permitir que los estudiantes presenten textos que no han escrito como propios, un tipo [nuevo] de 'plagio'\" (Miao y Holmes, 2023). El mismo informe señala que, a pesar de esfuerzos como las marcas de agua de contenido generadas por IA y las herramientas de detección, aún hay poca evidencia de que estas medidas o herramientas sean efectivas. Como resultado, la frontera entre la asistencia y la sustitución se vuelve cada vez más difusa. "
        },

        {
            type: "paragraph",
            content: "A medida que los estudiantes dependen de la IAG para generar respuestas, resumir contenido o completar tareas, pueden dejar de producir trabajos originales y centrarse en la gestión de resultados generados por IA, difuminando así la autoría y la responsabilidad. Con el tiempo, esto no solo socava los principios de integridad académica, sino que también refuerza patrones de dependencia excesiva y compromiso superficial, donde el enfoque se desplaza del aprendizaje y la comprensión a la eficiencia y la finalización de tareas."
        },

        // HEADING: ADDRESSING THE PROBLEM
        {
            type: "heading",
            content: "Abordando el problema"
        },

        {
            type: "paragraph",
            content: "Algunas soluciones que se están considerando actualmente incluyen la participación activa del usuario y el aprendizaje estructurado, donde la orientación y el apoyo se eliminan gradualmente \"a medida que los estudiantes aprenden y se vuelven más competentes\" (Universidad de Buffalo, 2024). Si bien estas soluciones se alinean con los principios establecidos de la ciencia del aprendizaje, siguen siendo insuficientes para mitigar por completo los riesgos para la retención del aprendizaje descritos anteriormente. Por lo tanto, se puede proponer un conjunto de medidas más específicas para mejorar la visión de las herramientas impulsadas por IAG en la educación."
        },

        // // SUBHEADING: HUMAN-AI COLLABORATION

        {
            type: "subheading",
            content: "Collaboración Humano-IA"
        },

        {
            type: "paragraph",
            content:
            "Crear un modelo híbrido en el que los profesores actúen como intermediarios en las interacciones entre IA y estudiantes puede ayudar a abordar varios de los riesgos identificados. Esto incluye tanto a los docentes que utilizan herramientas de IAG para mejorar la calidad de su retroalimentación como a la supervisión directa de cómo los estudiantes interactúan con estos sistemas."
        },

        {
            type: "paragraph",
            content: "Por ejemplo, investigaciones recientes muestran que \"las indagaciones del lenguaje natural facilitadas por la IAG mejoraron significativamente la calidad de la retroalimentación de los docentes en comparación con los docentes que contaban sin apoyo de la IA\" (Li et al., 2025). En lugar de reemplazar a los profesores, estos sistemas pueden convertirse en herramientas de asistencia para ayudar a interpretar las respuestas de los estudiantes de forma más eficiente, manteniendo al mismo tiempo el criterio humano."
        },

        {
            type: "paragraph",
            content: "Asimismo, un enfoque más directo de supervisión docente permite corregir directamente respuestas de IA que resultan ser inexactas o engañosas, a la vez que permite a los educadores evaluar si el razonamiento del estudiante se refleja adecuadamente en la retroalimentación que recibe. Describimos este enfoque como sistemas de IA con participación del docente: marcos de software de agentes intermedios que permiten a los docentes supervisar las interacciones de los estudiantes, influir o limitar los resultados de la IA y detectar comportamientos como copiar y pegar. Las implementaciones complementarias, como los paneles de control orientados a la enseñanza, pueden brindar información en tiempo real sobre la participación de los estudiantes y los patrones de razonamiento, lo que permite a los educadores intervenir cuando sea necesario y garantizar que el aprendizaje respaldado por IA se mantenga alineado con los objetivos de instrucción."
        },

        // // SUBHEADING: WELL-DEFINED EDUCATIONAL POLICIES

        {
            type: "subheading",
            content: "Políticas educativas bien definidas"
        },

        {
            type: "paragraph",
            content:
            "Se necesita una guía instructiva para regular el uso de las herramientas de IAG en entornos educativos, más allá de las intervenciones en el aula. Si bien las empresas de tecnología educativa son cada vez más transparentes sobre las limitaciones de sus sistemas, muchos distritos escolares aún carecen de políticas claramente definidas para el uso responsable de la IA. Esto genera ambigüedad tanto para estudiantes como para educadores, especialmente a la hora de distinguir entre asistencia aceptable e inconducta académica. Según la UNESCO, los sistemas de IAG pueden permitir que los estudiantes presenten contenido generado por IA como propio, lo que genera inquietudes sobre la autoría y la rendición de cuentas (Miao y Holmes, 2023)."
        },

        {
            type: "paragraph",
            content: "Para abordar esto, los distritos escolares locales han comenzado a implementar directrices integrales que definen los casos de uso apropiados para la IAG, establecen límites para la integridad académica y promueven el conocimiento de la IA entre estudiantes y personal académico. Si bien estos esfuerzos representan un avance significativo, las políticas deberían enfatizar aún más las prácticas de verificación (animando a los estudiantes a corroborar la información generada por IA con fuentes confiables) y exigir transparencia cuando se utilizan herramientas de IA en las tareas. Además, estas directrices deben ser fácilmente accesibles para padres y familias para garantizar que el uso responsable se extienda más allá del aula."
        },

        {
            type: "paragraph",
            content: "Por ejemplo, uno de los distritos escolares más consolidados del estado de Maryland, las Escuelas Públicas del Condado de Montgomery (Montgomery County Public Schools), gestiona una Base de Datos de Herramientas Digitales Online que detalla el estado de aprobación (p. ej., \"aprobado\", \"usar responsablemente\" o \"prohibido\"), su política de privacidad y términos de servicio, así como recomendaciones sobre su uso. Basándose en este modelo, los distritos deberían introducir directrices específicas para plataformas de chatbot independientes (p. ej., ChatGPT, Gemini), junto con descargos de responsabilidad claros sobre el uso de funciones de IA integradas en aplicaciones EdTech como Duolingo o Khan Academy. "
        },

        {
            type: "paragraph",
            content: "Finalmente, este proceso también puede fortalecerse mediante la aportación estructurada de padres y tutores, como la sugerencia de nuevas plataformas para su revisión, al tiempo que se asigna a los funcionarios del distrito la responsabilidad de mantener y actualizar periódicamente estos recursos. Un ecosistema escolar más informado puede disuadir del posible uso indebido de estas herramientas de IAG."
        },

        // // SUBHEADING: EDTECH-SCHOOL COLLABORATION

        {
            type: "subheading",
            content: "Colaboración entre EdTech y escuelas"
        },

        {
            type: "paragraph",
            content:
            "Otro enfoque clave implica una colaboración más cercana entre las empresas de EdTech y los distritos escolares para garantizar que las herramientas de IAG se alineen con los objetivos curriculares y los estándares educativos. En lugar de implementar sistemas de IA generalizados, las empresas pueden trabajar con los educadores para perfeccionar los modelos en función de los objetivos de aprendizaje específicos, los contextos del aula y las necesidades de los estudiantes. Este modelo de colaboración permite la evaluación a largo plazo de cómo la IAG afecta los resultados de aprendizaje de los estudiantes, especialmente en áreas como la retención y el pensamiento crítico."
        },
        
        {
            type: "paragraph",
            content: "Un ejemplo temprano de esta iniciativa se puede observar en Newark, Nueva Jersey, donde la Junta de Educación local aprobó \"un acuerdo de intercambio de datos con Khan Academy para estudiar si [su tutor impulsado por la IAG, Khanmigo,] fue eficaz 'en las escuelas del Distrito North Ward'\" (Gómez, 2024). Como parte de esta iniciativa, los investigadores analizan los datos de las pruebas estatales para determinar cómo el uso de la herramienta complementaria se correlaciona con el crecimiento y el rendimiento académico de los estudiantes en los grados 5-8 (y posteriormente en los grados 3-8). La implementación comenzó como un programa piloto en 2023 en un subconjunto de escuelas del distrito North Ward de Newark, antes de expandirse a docenas de escuelas más y llegar a decenas de miles de estudiantes, demostrando un modelo de adopción escalable y gradual."
        },

        {
            type: "paragraph",
            content: "Más allá de la evaluación, esta colaboración también enfatiza cómo la IAG puede integrarse significativamente en la enseñanza en el aula. En particular, los docentes han utilizado Khanmigo para enriquecer su enseñanza generando materiales didácticos, redactando conjuntos de problemas y adaptando el contenido a los intereses de los estudiantes; por ejemplo, creando problemas de álgebra basados en referencias culturales familiares como Pokémon (Khan Academy, 2026). De cara al futuro, este tipo de colaboración permite a los distritos ir más allá de las suposiciones sobre la eficacia de la IAG y, en su lugar, basarse en evidencia empírica para guiar la adopción que promueve la retención del aprendizaje. Esto también permite que herramientas que cuentan con problemas iniciales de enfoque, como Khanmigo, puedan sobrellevarse con el tiempo (p. ej., del 2024 al 2026) al retroalimentarse de esta misma evidencia y afinar sus parámetros para alinear su modelo GPT interno con los objetivos de las instituciones educativas."
        },

        // // SUBHEADING: CONSTRAINED AI DESIGN FOR ACTIVE LEARNING

        {
            type: "subheading",
            content: "Diseño de IA restringida para el aprendizaje activo"
        },

        {
            type: "paragraph",
            content:
            "Además de la supervisión externa y la implementación de normas, el diseño de los propios sistemas de IAG puede modificarse para mejorar la retención del aprendizaje. Un enfoque prometedor consiste en pasar de sistemas de generación de respuestas a tutores guiados de estilo socrático que priorizan la participación del estudiante sobre la eficiencia, como se ha observado recientemente en las implementaciones emergentes de diferentes plataformas web. Este estilo de enseñanza específico se asocia con el aprendizaje activo, un enfoque en el que se invita a todos los estudiantes a participar en el proceso de aprendizaje (Universidad de Minnesota, Twin Cities, 2026)."
        },

        {
            type: "pullquote",
            content:
            "La IAG sin restricciones puede compremeter la retención del aprendizaje"
        },

        {
            type: "paragraph",
            content: "Por ejemplo, la versión actual de Khanmigo de Khan Academy está estructurada intencionalmente para actuar como un tutor socrático en lugar de un motor de soluciones: guía a los estudiantes a través de los problemas paso a paso, plantea preguntas inquisitivas y, a menudo, se niega a proporcionar respuestas directas. De igual manera, herramientas que forman parte de Duolingo Max, modelo de suscripción impulsado por IA dentro de Duolingo, incorporan funciones como \"Explica mi respuesta\", que invitan a los estudiantes a reflexionar sobre los errores en lugar de recibir correcciones pasivas. Estos modos demuestran cómo la IA puede restringirse deliberadamente para reforzar los comportamientos de aprendizaje en lugar de ignorarlos."
        },

        {
            type: "paragraph",
            content: "De igual manera, en las herramientas emergentes de IAG, se observa una creciente tendencia hacia los \"modos de interacción guiada\", como la tutoría socrática (Q-Chat de Quizlet), el razonamiento paso a paso (Photomath) y las sugerencias estructuradas (Carnegie Learning). Estas decisiones de diseño reconocen que la generación de respuestas sin restricciones puede perjudicar la retención del aprendizaje, lo que impulsa a los desarrolladores a incorporar restricciones que fomenten la participación activa."
        },

        {
            type: "paragraph",
            content: "En resumen, como se observa en otras soluciones para abordar el problema, el diseño de IA con restricciones ya se está incorporando a las herramientas que estudiantes e instructores utilizan a diario."
        },

        // CLOSURE
        {
            type: "heading",
            content: "Cierre"
        },

        {
            type: "paragraph",
            content:
            "Las herramientas de IAG, en particular las que ofrecen las empresas de tecnología educativa, presentan interesantes posibilidades para el futuro de la educación, pero aún distan mucho de ser perfectas para fomentar la retención de conocimientos a largo plazo. A medida que estos sistemas se integran más en las aulas, es fundamental que su diseño priorice el aprendizaje centrado en el ser humano—mediante la interacción guiada, la participación del profesorado y las restricciones estructuradas—en lugar de la generación de respuestas sin restricciones. Sin estas garantías, los estudiantes corren el riesgo de volverse dependientes de la IA de maneras que comprometan su pensamiento crítico, su capacidad de retención de información y su participación en la resolución independiente de problemas. Estas consecuencias se extienden más allá del aula, afectando la preparación de los estudiantes para las exigencias intelectuales de la educación superior y la adaptabilidad requerida en el mercado laboral moderno. En última instancia, el éxito de la IAG en la educación no dependerá de la eficiencia con la que proporcione respuestas, sino de la eficacia con la que fomente la retención sostenida del aprendizaje durante los años de formación de los estudiantes y mediante el esfuerzo colaborativo de estudiantes, familias, escuelas y proveedores de herramientas de IAG."
        },

        // WORKS CITED
        {
            type: "heading",
            content: "Obras Citadas"
        },

        {
            type: "list",
            items: [
                "Bastani, H., Bastani, O., Sungu, A., Ge, H., Kabakci, O., & Mariman, R. (2025, June 25). Generative AI without guardrails can harm learning: Evidence from high school mathematics. Retrieved from Proceedings of the National Academy of Sciences of the United States of America (PNAS): https://www.pnas.org/doi/10.1073/pnas.2422633122",
                "Duolingo Team. (2023, March 14). Introducing Duolingo Max, A Learning Experience Powered by GPT-4. Retrieved from Duolingo Blog: https://blog.duolingo.com/duolingo-max/",
                "Duranton, S. (2023, March 27). Humans in the GenAI Loop. Retrieved from Forbes: https://www.forbes.com/sites/sylvainduranton/2023/03/27/humans-in-the-genai-loop/",
                "Gomez, J. (2024, May 13). Newark Public Schools considers new AI tutor chatbot for districtwide use after pilot testing. Retrieved from Chalkbeat: https://www.chalkbeat.org/newark/2024/05/13/artificial-intelligence-khanmigo-chatbot-tutor-pilot-testing-districtwide-expansion/",
                "Grassini, S. (2023, July 7). Shaping the Future of Education: Exploring the Potential and Consequences of AI and ChatGPT in Educational Settings. Retrieved from MDPI: https://doi.org/10.3390/educsci13070692",
                "International Center for Academic Integrity. (2026, February 28). Welcome to ICAI. Retrieved from ICAI: https://www.academicintegrity.org/aws/ICAI/pt/sp/home_page",
                "Jin, Y., Yang, K., Martinez-Maldonado, R., Gasevic, D., & Yan, L. (2025, October 16). The Agency Gap: How Generative AI Literacy Shapes Independent Writing after AI Support. Retrieved from Arxiv: https://arxiv.org/pdf/2507.04398",
                "Johri, A., Hingle, A., & Schleiss, J. (2024, October 29). Misconceptions, Pragmatism, and Value Tensions: Evaluating Students' Understanding and Perception of Generative AI for Education. Retrieved from Arxiv: https://arxiv.org/abs/2410.22289",
                "Khan Academy. (2026, February 28). Newark Public Schools partners with Khan Academy to boost math proficiency. Retrieved from Khan Academy Districts: https://www.khanacademy.org/schools/case-studies/newark-public-schools",
                "Khan Academy Team. (2024, January 4). Four Stars for Khanmigo: Common Sense Media Rates AI Tools for Learning. Retrieved from Khan Academy Blog: https://blog.khanacademy.org/four-stars-for-khanmigo-common-sense-media-rates-ai-tools-for-learning-kp/",
                "Khan Academy Team. (2024, May 17). Why We're Deeply Invested in Making AI Better at Math Tutoring (and What We've Been Up to Lately). Retrieved from Khan Academy Blog: https://blog.khanacademy.org/why-were-deeply-invested-in-making-ai-better-at-math-tutoring-and-what-weve-been-up-to-lately/",
                "Li, Y., Shan, Z., Rakovic, M., Guan, Q., Gasevic, D., & Guanliang, C. (2025, September 8). When AI explains in natural language: Unveiling the impact of generative AI explanations on educators' grading and feedback practices. Retrieved from Springer Nature: https://link.springer.com/article/10.1007/s10639-025-13741-z",
                "Mendes, V. M. (2023, September 5). Do we need to call for a more cautious approach to generative AI in education? Retrieved from UNESCO: https://world-education-blog.org/2023/09/05/do-we-need-to-call-for-a-more-cautious-approach-to-generative-ai-in-education/",
                "Meyer, D. (2024, April 17). Khanmigo WANTS to Love Kids but Doesn't Know How. Retrieved from Mathworlds: https://danmeyer.substack.com/p/khanmigo-wants-to-love-kids-but-doesnt",
                "MIT Teaching + Learning Lab. (2026, February 28). Help Students Retain, Organize and Integrate Knowledge. Retrieved from MIT: https://tll.mit.edu/teaching-resources/how-to-teach/help-students-retain-organize-and-integrate-knowledge/",
                "Montgomery County Public Schools. (2026, February 28). Data Privacy and Security. Retrieved from MCPS: https://www.montgomeryschoolsmd.org/data-privacy-security/technology/",
                "Mook, B. (2024, August 13). How students should — and shouldn't — use artificial intelligence. Retrieved from MSU Denver RED: https://red.msudenver.edu/2024/how-students-should-and-shouldnt-use-artificial-intelligence/",
                "Own Your AI. (2026, February 28). Configuring and Monitoring Students' Interactions with Generative AI Tools: Supporting Teacher Autonomy. Retrieved from Own Your AI: https://ownyourai.com/configuring-and-monitoring-students-interactions-with-generative-ai-tools-supporting-teacher-autonomy/",
                "Srivastava, N., Jain, S., Cohn, C., Mohammed, N., Timalsina, U., & Biswas, G. (2025, September 11). LearnLens: An AI-Enhanced Dashboard to Support Teachers in Open-Ended Classrooms. Retrieved from Arxiv: https://arxiv.org/abs/2509.10582",
                "Tong, R. (2023, 17 April). Khanmigo is great but NOT ready to tutor student. Retrieved from LinkedIn: https://www.linkedin.com/pulse/khanmigo-great-ready-tutor-student-richard-tong",
                "UNESCO. (2023). Guidance for generative AI in education and research. Retrieved from UNESCO Digital Library: https://unesdoc.unesco.org/ark:/48223/pf0000386693",
                "University of Cincinnati Libraries. (2025, October 21). AI Tools for Education — Khanmigo. Retrieved from University of Cincinnati: https://guides.libraries.uc.edu/ai-education/kh",
                "University of Illinois Urbana-Champaign. (2024, November 11). Traditional AI vs. Generative AI: What's the Difference? Retrieved from College of Education: https://education.illinois.edu/about/news-events/news/article/2024/11/11/what-is-generative-ai-vs-ai",
                "University of Minnesota, Twin Cities. (2026, February 28). Active Learning. Retrieved from Center for Educational Innovation: https://cei.umn.edu/teaching-resources/active-learning",
                "Walker, K., & Vorvoreanu, M. (2025, December 16). Learning outcomes with GenAI in the classroom: A review of empirical evidence. Retrieved from AI Ethics and Effects in Engineering and Research (Microsoft): https://www.microsoft.com/en-us/research/wp-content/uploads/2025/10/GenAILearningOutcomes_published_2025-12-16.pdf",
                "Yan, L., Greiff, S., Teuber, Z., & Gasvic, D. (2024, October 22). Promises and challenges of generative artificial intelligence for human learning. Retrieved from Nature Human Behaviour: https://www.nature.com/articles/s41562-024-02004-5",
                "Yenduri, G., Murugan, R., Govardanan, C. S., Supriya, Y., Reddy, P. K., Raj, D., . . . Gadekallu, T. R. (2024, January). GPT (Generative Pre-Trained Transformer)— A Comprehensive Review on Enabling Technologies, Potential Applications, Emerging Challenges, and Future Directions. Retrieved from Research Gate: https://www.researchgate.net/publication/379857733_GPT_Generative_Pre-trained_Transformer_-_A_Comprehensive_Review_on_Enabling_Technologies_Potential_Applications_Emerging_Challenges_and_Future_Directions"
            ]
        }
        ],
  }
};

export default prop1;