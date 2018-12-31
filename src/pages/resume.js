import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import { Layout, Wrapper, Header, Content } from 'components';
import PageTransition from 'gatsby-plugin-page-transitions';
import config from '../../config/SiteConfig';

export default function resume() {
  return (
    <Layout>
      <Wrapper>
        <Helmet title={`Resume | ${config.siteTitle}`} />
        <Header>
          <Link to="/">{config.siteTitle}</Link>
        </Header>
        <Content>
          <p style={{ textAlign: 'center' }}>
            <strong>Owen Wang</strong>
          </p>
          <p style={{ textAlign: 'center' }}>(647) 685 - 0595 / jiah.wang@mail.utoronto.ca</p>
          <p>&nbsp;</p>
          <p>
            <strong>PROFESSIONAL EXPERIENCE</strong>
          </p>
          <p>
            <em>King Business Development&nbsp;&nbsp;</em>
            <em>&nbsp;</em>June 2018- current
          </p>
          <p>
            <strong>Full Stack Developer</strong>
          </p>
          <ul>
            <li>
              Responsible for developing a full stack SPA to manage all veterinary health products throughout Canada.
              (React/PHP)
            </li>
            <li>Developed a major content management system for the government of Canada utilizing Wordpress</li>
            <li>
              Modernized and standardized the company codebase; integrated Eslint and webpack ; migrated from grunt
            </li>
            <li>Extended unit-tests coverage for codebase and integrated travis ci</li>
          </ul>
          <p>&nbsp;</p>
          <p>
            <em>Suzhou Institute of Biomedical Engineering</em>
            <em>&nbsp;</em>March &ndash; August 2017
          </p>
          <p>
            <strong>Data Analyst</strong>
          </p>
          <ul>
            <li>
              Responsible for modelling the status of perfusion tubes in Matlab and developing algorithms to predict new
              status given real-time data
            </li>
            <li>Received feedback for being a quick learner and demonstrated strong initiative at work</li>
            <li>Further solidified understanding of modern machine learning algorithms including SVM and PCA</li>
            <li>Optimized the algorithm and significantly lowered the classification error rate</li>
            <li>Put models through multiple test scenarios and received desired result</li>
          </ul>
          <p>&nbsp;</p>
          <p>
            <em>CaseWare International Inc.</em>
            <em>&nbsp;</em>May &ndash; December 2014
          </p>
          <p>
            <strong>Test Developer</strong>
          </p>
          <ul>
            <li>Developed multiple GUI tests suites under a Java + SilkTest environment;</li>
            <li>
              Developed solid understanding of algorithms and methodologies during the process of developing and
              deploying new tests;
            </li>
            <li>Effectively scheduled time to meet multiple deadlines and expectations;</li>
          </ul>
          <p>&nbsp;</p>
          <p>
            <strong>Notable works</strong>
          </p>
          <ul>
            <li>
              Developed plug-in for citation tool Zotero in JavaScript/XUL, allowing user to batch edit tags of
              citations.
            </li>
            <li>
              Designed and developed a fully functional website aiming for hook up undergrads and start-ups using MEAN
              stack, deployed at: <em>https://kickstartup.herokuapp.com/</em>
            </li>
            <li>
              Implemented an Android application in Java which allow doctors/nurses to collect, update, maintain patient
              data through mobile devices
            </li>
            <li>
              Prototype Chat app in active development, hosted at{' '}
              <a href="http://chat-de905.firebaseapp.com">
                <em>http://chat-de905.firebaseapp.com</em>
              </a>
              , written in React/Firebase
            </li>
          </ul>
          <p>&nbsp;</p>
          <p>
            <strong>TECHNICAL SKILLS</strong>
          </p>
          <ul>
            <li>
              Extensive experience with programming languages: 5 years of experience in Python, 4 years of experience in
              Java, C, PHP and JavaScript, also experienced in Haskell, SQL, Matlab, TypeScript
            </li>
            <li>
              Hands-on experience in all stages of Web Development process, proficient with JavaScript/ES6 (Angular,
              React), Node.js(Express, Koa), HTML5/CSS3, NoSQL databases and frequently adapting to new
              concepts/frameworks, currently learning Electron, Rxjs and GraphQL.
            </li>
            <li>
              Strong logical thinking, deep understanding of advanced algorithm designs ranging from greedy algorithms
              to dynamic programming, LeetCode frequeneer.
            </li>
            <li>
              Functional Programming / Event-driven Programming evangelist, strong believer of &ldquo;Any application
              that can be written in JavaScript, will eventually be written in JavaScript.&rdquo;
            </li>
          </ul>
          <p>&nbsp;</p>
          <p>
            <strong>EDUCATION</strong>
          </p>
          <p>
            <strong>
              <em>Honours Bachelor of Science</em>
            </strong>
            <strong> &nbsp;</strong>September 2012 &ndash; June 2016
          </p>
          <p>
            <strong>University of Toronto Scarborough</strong>, Scarborough, Ontario
          </p>
          <ul>
            <li>
              Computer Science Specialist Program &ndash; Software Engineering Stream, notable courses includes:
              Introduction to machine learning, Introduction to artificial intelligence, Web Development;
            </li>
            <li>Cumulative GPA of 3.65 out of 4.0; 1st, 3rd and 4th year Dean&rsquo;s List</li>
          </ul>
        </Content>
      </Wrapper>
    </Layout>
  );
}
