/**
 * @Author: Colin Osterhout <ctosterhout>
 * @Date:   2020-04-09T18:45:45-08:00
 * @Email:  ctosterhout@alaska.edu
 * @Project: ernie
 * @Last modified by:   ctosterhout
 * @Last modified time: 2020-04-23T17:08:15-08:00
 * @License: Released under MIT License. Copyright 2020 University of Alaska Southeast.  For more details, see https://opensource.org/licenses/MIT
 */

const screens = [{
    id: 'start',
    type: 'information',
    title: 'Part 1: Your Past Experiences with Reading and Writing',
    text: `
    <p>In this part, you&#8217;ll reflect on your familiarity and comfort level with the work students do in writing courses. In Part 2, you&#8217;ll read a short essay that represents a typical reading in a WRTG 111 course. After reading the sample essay, you&#8217;ll answer a set of questions about how confident you would feel completing assignments about an essay like this in class.</p>
    <p>After completing the Directed Self-Placement you'll be presented with a recommendation on the course along with the course descriptions for WRTG 090, 110, and 111.</p>
    <p>Remember, the <em>Directed Self-Placement</em> process is not a test. Rather, the questions will help you assess how your abilities fit with each writing course. Your professors will make a final placement decision based on your first assignments in class. If you have any questions, please contact your advisor using the form at the end of the <em>Directed Self-Placement</em>.</p>
    <p class="alert alert-secondary">Use the navigation buttons (left and right arrows) below to advance to the next screen, or go back to a previous screen. Use the reset button (circular arrow) to go back to the beginning and start over.</p>
    `
  },
  {
    id: '1',
    type: 'question',
    text: 'During the last two years, how often in school or at work did you write essays or reports that were longer than three pages?',
    answers: [{
        id: 'A',
        text: 'Never',
        value: 0
      },
      {
        id: 'B',
        text: 'Rarely (1–3 times)',
        value: 1
      },
      {
        id: 'C',
        text: 'Sometimes (4–5 times)',
        value: 2
      },
      {
        id: 'D',
        text: 'Often (more than 5 times)',
        value: 3
      }
    ]
  },
  {
    id: '2',
    text: 'How often do you read books, articles, reports or other longer written materials, printed or online?',
    type: 'question',
    answers: [{
        id: 'A',
        text: 'Rarely or never',
        value: 0
      },
      {
        id: 'B',
        text: 'A few times a year',
        value: 1
      },
      {
        id: 'C',
        text: 'A few times a month',
        value: 2
      },
      {
        id: 'D',
        text: 'A few times a week',
        value: 3
      }
    ]
  },
  {
    id: '3',
    text: 'How do you feel about your ability to understand news articles, essays, or textbooks?',
    type: 'question',
    answers: [{
        id: 'A',
        text: 'I am still learning the skills I need to understand this kind of writing fully, so I often find it challenging to identify the writer’s main idea.',
        value: 0
      },
      {
        id: 'B',
        text: 'I sometimes feel like I understand this kind of fully, but sometimes I still find it challenging to identify the main idea.',
        value: 1
      },
      {
        id: 'C',
        text: 'I usually feel like I understand the material fully.',
        value: 2
      },
      {
        id: 'D',
        text: 'I almost always understand the material fully.',
        value: 3
      }
    ]
  },
  {
    id: '4',
    text: 'When you need to write an essay, report, or other important document, how easy is it to organize your thoughts?',
    type: 'question',
    answers: [{
        id: 'A',
        text: ' It’s often difficult for me to organize my thoughts when I sit down to write these kinds of documents.',
        value: 0
      },
      {
        id: 'B',
        text: ' I sometimes have trouble organizing my thoughts when I try to write these kinds of documents.',
        value: 1
      },
      {
        id: 'C',
        text: 'I can usually figure out a good way to organize my thoughts when I write these kinds of documents.',
        value: 2
      },
      {
        id: 'D',
        text: 'I almost always organize my thoughts effectively when writing these kinds of documents.',
        value: 3
      }
    ]
  },
  {
    id: '5',
    text: 'When you need to revise an essay, report, or other important document, how easy is it for you to fix the spelling, grammar, or punctuation, on your own?',
    type: 'question',
    answers: [{
        id: 'A',
        text: 'I don’t have much experience editing and revising this kind of writing.',
        value: 0
      },
      {
        id: 'B',
        text: 'It’s often challenging for me to revise spelling, grammar or punctuation mistakes in my writing',
        value: 1
      },
      {
        id: 'C',
        text: 'I can sometimes find spelling, grammar or punctuation mistakes on my own and correct them, but sometimes I can’t.',
        value: 2
      },
      {
        id: 'D',
        text: 'I can usually find spelling, grammar or punctuation mistakes on my own and correct them.',
        value: 3
      }
    ]
  },
  {
    id: '6',
    text: 'When you need to revise an essay, report, or other important document, how easy is it for you to make other changes, like improving the organization or adding details?',
    type: 'question',
    answers: [{
        id: 'A',
        text: 'I don’t have much experience making these kinds of changes.',
        value: 0
      },
      {
        id: 'B',
        text: 'I often find it challenging to make these kinds of changes.',
        value: 1
      },
      {
        id: 'C',
        text: ' I can sometimes figure out what changes are necessary, but sometimes I can’t.',
        value: 2
      },
      {
        id: 'D',
        text: 'I can usually figure out what changes I need to make.',
        value: 3
      }
    ]
  },
  {
    id: '7',
    text: 'How would you describe your time management skills, such as your ability to follow a schedule, make to-do lists, or use reminders, a calendar, or planner?',
    type: 'question',
    answers: [{
        id: 'A',
        text: 'I usually don’t make a plan or follow a schedule to complete my work.',
        value: 0
      },
      {
        id: 'B',
        text: 'I sometimes make a plan or follow a schedule, but may miss assignments or deadlines.',
        value: 1
      },
      {
        id: 'C',
        text: 'I usually make a plan or follow a schedule.',
        value: 2
      },
      {
        id: 'D',
        text: 'I almost always make a plan or follow a schedule, and almost always complete my work on time.',
        value: 3
      }
    ]
  },
  {
    id: '8',
    text: 'In writing courses, students are expected to do at least two hours working outside of class for every hour spent in class. For example, a WRTG 110 student would spend four hours per week in class, and eight additional hours per week on homework, for a total of 12 hours per week. How would you describe the other demands on your time, such as your job, family, classes, or other commitments?',
    type: 'question',
    answers: [{
        id: 'A',
        text: 'I have many other commitments, so I may not have enough time to complete this much writing homework.',
        value: 0
      },
      {
        id: 'B',
        text: 'I have some other commitments, so it will be challenging for me to find the time to complete this much writing homework.',
        value: 1
      },
      {
        id: 'C',
        text: ' I have other commitments, but I should still have enough time for this much writing homework.',
        value: 2
      },
      {
        id: 'D',
        text: 'I do not have other commitments. I have plenty of time for this much writing homework.',
        value: 3
      }
    ]
  },
  {
    id: '9',
    text: 'Writing students are expected to use a computer for some assignments. How comfortable are you using a computer to draft, revise, save, and print or share a written document?',
    type: 'question',
    answers: [{
        id: 'A',
        text: 'I am not comfortable using a computer in this way.',
        value: 0
      },
      {
        id: 'B',
        text: 'I am somewhat comfortable using a computer in this way, but I will need some help.',
        value: 1
      },
      {
        id: 'C',
        text: 'I am mostly comfortable using a computer in this way.',
        value: 2
      },
      {
        id: 'D',
        text: 'I am very comfortable using a computer in this way.',
        value: 3
      }
    ]
  },
  {
    id: '10',
    text: 'In WRTG 111, students need the ability to stay focused on their work. How do you feel about your ability to concentrate and avoid distractions in and out of class?',
    type: 'question',
    answers: [{
        id: 'A',
        text: 'I often have trouble staying focused on my work.',
        value: 0
      },
      {
        id: 'B',
        text: 'Sometimes I stay focused for a while, but sometimes I get distracted or have trouble concentrating.',
        value: 1
      },
      {
        id: 'C',
        text: 'I can usually stay focused on my work.',
        value: 2
      },
      {
        id: 'D',
        text: 'I rarely have trouble staying focused on my work.',
        value: 3
      }
    ]
  },
  {
    id: '11',
    text: 'In WRTG 111, students may need to work closely with others, such as their peers, their professors, a Writing Center tutor, or other services to make their writing the best it can be. How comfortable are you with asking others for help?',
    type: 'question',
    answers: [{
        id: 'A',
        text: 'I have a hard time asking anyone for help.',
        value: 0
      },
      {
        id: 'B',
        text: 'It is difficult for me to ask most people for help, but I can usually find one or two people to help me if needed.',
        value: 1
      },
      {
        id: 'C',
        text: 'I am usually comfortable asking my professor and others for help.',
        value: 2
      },
      {
        id: 'D',
        text: 'I am very comfortable asking my professor and others for help.',
        value: 3
      }
    ]
  },
  {
    id: 'intro-2nd-part',
    type: 'information',
    title: 'Part 2: Reading and Reflection',
    text: `
        <p>The following is a sample text like those that you might be assigned to read and write about in WRTG 111. Please read the text and answer the questions that follow.</p>
        `
  },
  {
    id: 'text-1',
    type: 'information',
    title: 'Ernestine Hayes, “Raven’s Intelligent Design” (2012)',
    text: `
      <p>Storytelling is an ancient human art too often portrayed in modern society as best suited to the entertainment of children, and perhaps even perceived as a bit quaint. In our printed and digital age, it’s easy to forget that the overwhelming portion of human knowledge and history has been nurtured and preserved by the sophisticated human practice of telling story. The present method of pursuing institutional degrees encourages scholars to gather stories, students to research them, doctoral candidates to study them and craft insightful theses based on imposed literary taxonomy. In the undertaking of these valid pursuits, however, it’s crucial to remember that the most worthwhile consequence of storytelling and story listening is the development of our insight into essential human concerns.</p>
      <p>It’s commonly acknowledged that the art of people indigenous to what is now Southeast Alaska — people commonly identified as the Tlingit, Haida, and Tsimshian nations — is sophisticated and highly developed. Many people are aware that the matrilineal kinship system of these cultures is quite complex. A few others know that Northwest Coast indigenous languages are extremely complex, employing complicated rules of grammar and syntax, and manifesting phonemes not found in most other languages. Some students are aware of the long-established legal systems of Northwest Coast cultures. A few scholars know that by the time of colonial contact, traditional educational systems had been in place and effective for centuries. After hundreds of generations, when the measure of time finally changed from the movements of glaciers to the hands of a clock, every system needed for a culture to survive and thrive had already been developed, refined, and placed into the hands of the next generations by telling this brilliant history and listening to these bright truths.</p>
        `
  },
  {
    id: 'text-2',
    type: 'information',
    title: 'Ernestine Hayes, “Raven’s Intelligent Design” (2012)',
    text: `
      <p>In the complex Tlingit legal system, stories and songs are intellectual property owned by a clan. Their retelling and performance can only be done with permission and with careful attention to specific attribution. Some stories, though, are so fundamental that they have become part of traditional worldview. Stories of Raven’s endeavors are examples; most are part of the Raven cycle, and many of these stories are well known and often told. Among the many stories told about the land that became known as Southeast Alaska and the beings that live upon that place is a story of Raven’s intelligent design.</p>
      <p>There was a time when darkness was upon the world, and no light shone on Lingit Aani. Raven, ever curious, ever industrious, decided he would do something about the darkness, and through investigation and study, with scheming and plotting, employing improvisation and vision, he accomplished his purpose, and light came upon the world.</p>
      <p>We can recall events in 2010, when thirty-three miners were trapped for more than two months in a Chilean gold and copper mine. The world monitored rescue efforts, and one update noted that the miners would need eyewear to protect them against the “unfamiliar sunlight.” To experience sunlight after two months must indeed have been astounding. How much more so for people of Raven’s time to experience light from the moon, from the stars, and from the sun after their lifetimes of darkness. When Raven caused light to flood the world, all the people must have been deeply alarmed. Even the mountains must have trembled.</p>
        `
  },
  {
    id: 'text-3',
    type: 'information',
    title: 'Ernestine Hayes, “Raven’s Intelligent Design” (2012)',
    text: `
      <p>Not long ago, all the people on earth lived by the phases of the moon. Nowadays we no longer do that. We don’t really live by our environment any more, until a disaster strikes or an unfamiliar natural anomaly occurs. Rather than living by the light and by the seasons, we are guided by printed calendars and scheduled meals. It’s sometimes difficult in an artificial world to recognize the natural purpose of our principal storyteller: the land itself.</p>
      <p>We can always listen to the land, whether it’s because we are among the fortunate who return to a place summer after summer, perhaps to fish, perhaps to pick berries, perhaps to laugh and become part of the land again, or whether it’s because we perform our hunting and berry-picking in the manners of the twenty-first century and visit those places in our dreams. The land is telling stories. In the ancient way of understanding — the human way, as it were — listening to the land is an essential element of Raven’s intelligent design.</p>
  `
  },
  {
    id: '12',
    text: 'How challenging was it for you to read and understand this text?',
    type: 'question',
    answers: [{
        id: 'A',
        text: 'Very challenging',
        value: 0
      },
      {
        id: 'B',
        text: 'Moderately challenging',
        value: 1
      },
      {
        id: 'C',
        text: 'A little challenging',
        value: 2
      },
      {
        id: 'D',
        text: 'Not very challenging at all',
        value: 3
      }
    ]
  },
  {
    id: '13',
    text: 'How challenging is it for you in general to read texts like this, especially about a subject you are unfamiliar with?',
    type: 'question',
    answers: [{
        id: 'A',
        text: 'Very challenging',
        value: 0
      },
      {
        id: 'B',
        text: 'Moderately challenging',
        value: 1
      },
      {
        id: 'C',
        text: 'A little challenging',
        value: 2
      },
      {
        id: 'D',
        text: 'Not very challenging at all',
        value: 3
      }
    ]
  },
  {
    id: '14',
    text: 'Please take a look at the following discussion questions, which you would need to answer in a WRTG 111 class: "What are the main ideas of the text?", "Choose one important quote from the text. What do you think it means?", and "How did you react to the text? What did it make you think about from your own life?". How challenging would it be to answer questions like these?',
    type: 'question',
    answers: [{
        id: 'A',
        text: 'Very challenging',
        value: 0
      },
      {
        id: 'B',
        text: 'Moderately challenging',
        value: 1
      },
      {
        id: 'C',
        text: 'A little challenging',
        value: 2
      },
      {
        id: 'D',
        text: 'Not very challenging at all',
        value: 3
      }
    ]
  },
  {
    id: 'answer-key',
    type: 'answer',
    title: "Next steps",
    answerKey: [{
        id: 'wrtg-090',
        cutoff: 0,
        text: `<p>Based on your answers, we believe that <strong>WRTG 090</strong> might be right for you.</p>`
      },
      {
        id: 'wrtg-110',
        cutoff: 21,
        text: `<p>Based on your answers, we believe that <strong>WRTG 110</strong> might be right for you.</p>`
      },
      {
        id: 'wrtg-111',
        cutoff: 32,
        text: `<p>Based on your answers, we believe that <strong>WRTG 111</strong> might be right for you.</p>`
      }
    ],
    text: `
      <h3>Confirm your self-placement recommendation</h3>
      <p>To make sure that this recommendation is appropriate for you, carefully consider the course descriptions and student skills above. Your recommended course should be the one that best matches your current abilities. When you are ready, confirm your choice of WRTG 090, WRTG 110, or WRTG 111. You will share this choice with your advisor once you have completed the additional placement steps below.</p>

      <h3>Have you already completed the <em>ALEKS Math Placement Test</em>?</h3>
      <p>If you have already completed your math placement test, you are now ready to schedule a registration appointment. If you know who your advisor is please contact them directly to schedule an appointment; if you are uncertain who your advisor is please use our <a href="https://docs.google.com/forms/d/e/1FAIpQLSejn1bT2glFikkfd5EaT9kSl8qSyTgmJF-cnplu0KBcP3QRtQ/viewform?usp=sf_link">contact form</a> and your advisor will be in touch soon.</p>

      <h3>If you have not already completed the <em>ALEKS Math Placement Test</em></h3>
      <p>All new students who have not earned college credit for math or a <a href="http://catalog.uas.alaska.edu/registration/credit-by-examination/#advancedplacementcreditthroughcollegeentranceexaminationboardceebtext">qualifying AP score</a> must complete the online math placement assessment. The UA math placement assessment is through <a href="https://www.alaska.edu/aleks/">ALEKS</a> (UA login required). It is a fully automated, adaptive system that covers material from basic math through pre-calculus.</p>

      <p><em>Students can take this assessment up to 5 times. We encourage every student to complete the assessment at least twice.</em></p>
      <p>If you have any questions, please submit your information via the <a href="https://docs.google.com/forms/d/e/1FAIpQLSejn1bT2glFikkfd5EaT9kSl8qSyTgmJF-cnplu0KBcP3QRtQ/viewform?usp=sf_link">advisor contact form</a></p>
`
  }
]

export default screens
