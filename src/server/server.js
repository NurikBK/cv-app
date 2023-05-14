// import { createServer, Model } from 'miragejs';

// export function makeServer() {
//   const server = createServer({
//     models: {
//       skills: Model,
//       timelines: Model,
//     },

//     seeds(server) {
//       server.create('skill', { name: 'CSS', range: '60' });
//       server.create('skill', { name: 'HMTL', range: '80' });

//       server.create('timeline', {
//         date: '2011',
//         title: 'Dalian University Of Foreign Languages',
//         text: ` I attended Dalian University of Foreign Languages (DLUFL) in Liaoning, China, where I pursued a Bachelor of Arts in Chinese Literature. Throughout my four years of study, I was exposed to a wide range of literature, from classic works to contemporary pieces. In addition to studying literature in Chinese, I also had the opportunity to learn about Chinese literature and culture through elective courses. Outside of the classroom, I participated in various extracurricular activities, including a literature club. These experiences broadened my perspective and deepened my appreciation for the power of language and storytelling.`,
//       });

//       server.create('timeline', {
//         date: '2012',
//         title: 'Master of Business Administration',
//         text: `I earned my Master of Business Administration (MBA) degree from Alamty University of Bussnes in the Kazakhstan. The program provided me with a comprehensive understanding of business concepts, such as marketing, finance, accounting, and operations management. I also had the opportunity to specialize in entrepreneurship and innovation, which allowed me to develop skills in identifying and pursuing new business opportunities. Throughout the program, I worked on various group projects, which improved my collaboration and leadership skills. The MBA program also provided me with a strong professional network that I can tap into for career opportunities.`,
//       });

//       server.create('timeline', {
//         date: '2023',
//         title: 'EPAM',
//         text: `EPAM Systems, Inc. is an American company that specializes in software engineering services, digital platform engineering, and digital product design, operating out of Newtown, Pennsylvania. I finished the EPAM web developer course, where I learned about HTML, CSS, JS, and React 'During my studies, I gained a deep understanding of computer architecture, algorithms, data structures, programming languages such as HTML, CSS, JavaSctripts and React. I also had the opportunity to work on various projects, including a web app for tracking fitness goals and a web application for online shopping. These experiences honed my skills in problem-solving, collaboration, and communication. Overall, my degree program provided me with a strong foundation in web development and prepared me for a career in web development.`,
//       });
//     },

//     routes() {
//       this.namespace = 'api';

//       this.get('/skills', (schema) => {
//         return schema.skills.all();
//       });

//       this.get('/timelines', (schema) => {
//         return schema.timelines.all();
//       });

//       this.post('/skills', (schema, request) => {
//         let attrs = JSON.parse(request.requestBody);
//         return schema.skills.create(attrs);
//       });
//     },
//   });

//   return server;
// }

import { createServer, Model } from 'miragejs';

createServer({
  models: {
    skill: Model,
    education: Model,
  },
  seeds(server) {
    server.create('skill', { name: 'CSS', range: '60' });
    server.create('skill', { name: 'HMTL', range: '80' });

    server.create('education', {
      date: '2011',
      title: 'Dalian University Of Foreign Languages',
      text: ` I attended Dalian University of Foreign Languages (DLUFL) in Liaoning, China, where I pursued a Bachelor of Arts in Chinese Literature. Throughout my four years of study, I was exposed to a wide range of literature, from classic works to contemporary pieces. In addition to studying literature in Chinese, I also had the opportunity to learn about Chinese literature and culture through elective courses. Outside of the classroom, I participated in various extracurricular activities, including a literature club. These experiences broadened my perspective and deepened my appreciation for the power of language and storytelling.`,
    });

    server.create('education', {
      date: '2012',
      title: 'Master of Business Administration',
      text: `I earned my Master of Business Administration (MBA) degree from Alamty University of Bussnes in the Kazakhstan. The program provided me with a comprehensive understanding of business concepts, such as marketing, finance, accounting, and operations management. I also had the opportunity to specialize in entrepreneurship and innovation, which allowed me to develop skills in identifying and pursuing new business opportunities. Throughout the program, I worked on various group projects, which improved my collaboration and leadership skills. The MBA program also provided me with a strong professional network that I can tap into for career opportunities.`,
    });

    server.create('education', {
      date: '2023',
      title: 'EPAM',
      text: `EPAM Systems, Inc. is an American company that specializes in software engineering services, digital platform engineering, and digital product design, operating out of Newtown, Pennsylvania. I finished the EPAM web developer course, where I learned about HTML, CSS, JS, and React 'During my studies, I gained a deep understanding of computer architecture, algorithms, data structures, programming languages such as HTML, CSS, JavaSctripts and React. I also had the opportunity to work on various projects, including a web app for tracking fitness goals and a web application for online shopping. These experiences honed my skills in problem-solving, collaboration, and communication. Overall, my degree program provided me with a strong foundation in web development and prepared me for a career in web development.`,
    });
  },
  routes() {
    this.timing = 3000;

    this.get('/api/educations', (schema) => {
      return schema.educations.all();
    });

    this.get('/api/skills', (schema) => {
      return schema.skills.all();
    });

    this.post('/api/skills', (schema, request) => {
      let attrs = JSON.parse(request.requestBody);

      return schema.skills.create(attrs);
    });
    this.get('/api/skills', (schema) => {
      return schema.skills.all();
    });

    this.passthrough('/skills');
  },
});
