import { c as create_ssr_component, b as subscribe, e as each, d as escape, v as validate_component, f as add_attribute } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const DynamicIcon_svelte_svelte_type_style_lang = "";
const Header_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: "header.svelte-1wm259x.svelte-1wm259x{position:sticky;top:0;background-color:white;z-index:1;height:10vh;display:flex;flex-direction:column;justify-content:center;padding:0 32px 0 24px}.flex.svelte-1wm259x.svelte-1wm259x{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.flex.svelte-1wm259x .routes.svelte-1wm259x{justify-content:space-between;color:#aaa;font-weight:500;line-height:1.5;align-items:center;font-size:1.3rem}.flex.svelte-1wm259x .routes .route.svelte-1wm259x{margin-left:2rem;color:inherit;text-decoration:none}.flex.svelte-1wm259x .routes .route .route__active.svelte-1wm259x{color:#777}.flex.svelte-1wm259x .routes .route.svelte-1wm259x:hover{color:#333}.flex.svelte-1wm259x .routes .route.svelte-1wm259x:first-child{margin-left:0px}.flex.svelte-1wm259x .logo.svelte-1wm259x{width:50px;height:50px}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const nav = [
    { path: "", name: "Home" },
    { path: "#about", name: "About" },
    { path: "#projects", name: "Projects" },
    { path: "#contact", name: "Contact" },
    { path: "#blog", name: "Blog ***" }
  ];
  let path;
  $$result.css.add(css$8);
  {
    {
      path = $page.url.pathname.split("/")[1];
    }
  }
  $$unsubscribe_page();
  return `<header class="svelte-1wm259x"><nav class="flex svelte-1wm259x" aria-label="Global"><div class="flex svelte-1wm259x" data-svelte-h="svelte-16m4glm"><a href="/"><img class="logo svelte-1wm259x" src="/images/logo.png" alt="SimProch logo"></a></div><div class="flex routes svelte-1wm259x">${each(nav, (route, index) => {
    return `<a class="route svelte-1wm259x" href="${"./" + escape(route.path, true)}">${path === route ? `<span class="route__active svelte-1wm259x">${escape(PerformanceResourceTiming.name)}</span>` : `<span>${escape(route.name)}</span>`}</a>`;
  })}</div></nav></header>`;
});
const MouseIndicator_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".mouse.svelte-1h68snq.svelte-1h68snq{width:25px;height:45px;border:2px solid black;border-radius:15px;cursor:pointer;position:relative;text-align:center}.mouse.svelte-1h68snq .mouse__wheel.svelte-1h68snq{height:8px;margin:2px auto 0;display:block;width:4px;background-color:black;border-radius:50%;animation:2s ease infinite svelte-1h68snq-wheel-up-down}@keyframes svelte-1h68snq-wheel-up-down{0%{margin-top:6px;opacity:0}30%{opacity:1}50%{margin-top:14px;opacity:0}100%{margin-top:14px;opacity:0}}",
  map: null
};
const MouseIndicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<div class="mouse svelte-1h68snq" data-svelte-h="svelte-8n5840"><span class="mouse__wheel svelte-1h68snq"></span></div>`;
});
const Home_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "section.svelte-1l7n2xe.svelte-1l7n2xe{min-height:90vh}h1.svelte-1l7n2xe.svelte-1l7n2xe{font-size:3rem;margin-block-start:0;margin-block-end:0;margin-block:0}h2.svelte-1l7n2xe.svelte-1l7n2xe{font-size:2rem;font-weight:500;margin-block-start:0;margin-block-end:0;margin-block:0}.home.svelte-1l7n2xe.svelte-1l7n2xe{background-color:rgb(240, 240, 240);display:flex;flex-direction:column;align-items:center}.home.svelte-1l7n2xe .home__title.svelte-1l7n2xe{margin-top:auto;display:flex;flex-direction:column;align-items:center}.home.svelte-1l7n2xe .home__mouse.svelte-1l7n2xe{margin-top:auto;margin-bottom:2rem}",
  map: null
};
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<section class="home svelte-1l7n2xe"><div class="home__title svelte-1l7n2xe" data-svelte-h="svelte-1clfyte"><h1 class="svelte-1l7n2xe">Hi, I&#39;m Simon.</h1><h2 class="svelte-1l7n2xe">I&#39;m a full stack developer who does shit for funks</h2></div><div class="home__mouse svelte-1l7n2xe">${validate_component(MouseIndicator, "MouseIndicator").$$render($$result, {}, {}, {})}</div></section>`;
});
const SkillButton_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: '.button.svelte-1lzgbgp{position:relative;display:inline-block;margin:15px;padding:8px 16px;text-align:center;font-size:16px;letter-spacing:1px;text-decoration:none;color:#999999;background:#ffffff;border:2px solid #999999;cursor:pointer;transition:ease-out 0.5s;-webkit-transition:ease-out 0.5s;-moz-transition:ease-out 0.5s}.button.svelte-1lzgbgp::after,.button.svelte-1lzgbgp::before{position:absolute;content:"";width:0;height:0;transition:0.5s}.button.svelte-1lzgbgp::after{top:-2px;left:-2px;border-top:2px solid transparent;border-left:2px solid transparent}.button.svelte-1lzgbgp::before{bottom:-2px;right:-2px;border-bottom:2px solid transparent;border-right:2px solid transparent}.button.svelte-1lzgbgp:hover{color:#222}.button.svelte-1lzgbgp:hover::after,.button.svelte-1lzgbgp:hover::before{width:calc(50% + 2px);height:calc(50% + 2px);border-color:#222}',
  map: null
};
const SkillButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { linkTo } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.linkTo === void 0 && $$bindings.linkTo && linkTo !== void 0)
    $$bindings.linkTo(linkTo);
  $$result.css.add(css$5);
  return `<a class="button svelte-1lzgbgp"${add_attribute("href", linkTo, 0)} target="_blank">${escape(name)}</a>`;
});
const About_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "section.svelte-4qy6j9.svelte-4qy6j9{min-height:90vh}h1.svelte-4qy6j9.svelte-4qy6j9{font-size:3rem;margin-block-start:0;margin-block-end:0;margin-block:0}h2.svelte-4qy6j9.svelte-4qy6j9{font-size:2rem;font-weight:500;margin-block-start:0;margin-block-end:0;margin-block:0}.divider.svelte-4qy6j9.svelte-4qy6j9{height:8px;width:30px;border-radius:8px;background-color:#888;margin:4px 0}.flex-col.svelte-4qy6j9.svelte-4qy6j9{display:flex;flex-direction:column;align-items:center}.wrapper.svelte-4qy6j9.svelte-4qy6j9{display:flex;flex-direction:column;align-items:center;width:60%}.wrapper.svelte-4qy6j9 .about.svelte-4qy6j9{display:flex;flex-direction:row;gap:3rem}.wrapper.svelte-4qy6j9 .about .about__description.svelte-4qy6j9{flex:1}.wrapper.svelte-4qy6j9 .about .about__skills.svelte-4qy6j9{flex:1}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const skills = [
    {
      name: "Angular",
      linkTo: "https://angular.io/"
    },
    {
      name: "CSS",
      linkTo: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
      name: "Cypress",
      linkTo: "https://www.cypress.io/"
    },
    {
      name: ".NET Core",
      linkTo: "https://learn.microsoft.com/en-us/dotnet/core/introduction"
    },
    {
      name: "expressjs",
      linkTo: "https://expressjs.com/"
    },
    {
      name: "Git",
      linkTo: "https://git-scm.com/"
    },
    {
      name: "HTML",
      linkTo: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
      name: "JavaScript",
      linkTo: "https://www.ecma-international.org/"
    },
    {
      name: "Jest",
      linkTo: "https://jestjs.io/"
    },
    {
      name: "Nest JS",
      linkTo: "https://nestjs.com/"
    },
    {
      name: "Node.JS",
      linkTo: "https://nodejs.org/en"
    },
    {
      name: "React",
      linkTo: "https://react.dev/"
    },
    {
      name: "react-native",
      linkTo: "https://reactnative.dev/"
    },
    {
      name: "RxJS",
      linkTo: "https://rxjs.dev/"
    },
    {
      name: "Sass",
      linkTo: "https://sass-lang.com/"
    },
    {
      name: "TypeScript",
      linkTo: "https://www.typescriptlang.org/"
    }
  ];
  const databaseTools = [
    {
      name: "WebScale",
      linkTo: "https://www.mongodb.com/"
    },
    {
      name: "MS-SQL",
      linkTo: "https://www.microsoft.com/en-us/sql-server"
    },
    {
      name: "MySQL",
      linkTo: "https://www.mysql.com/"
    },
    {
      name: "Prisma",
      linkTo: "https://www.prisma.io/"
    },
    {
      name: "TypeORM",
      linkTo: "https://typeorm.io/"
    }
  ];
  const otherTools = [
    {
      name: "Atlassian tools",
      linkTo: "https://www.atlassian.com/"
    },
    {
      name: "AWS",
      linkTo: "https://aws.amazon.com/"
    },
    {
      name: "CircleCI",
      linkTo: "https://circleci.com/"
    },
    {
      name: "Cucumber",
      linkTo: "https://cucumber.io/"
    },
    {
      name: "GitHub",
      linkTo: "https://github.com/"
    },
    {
      name: "Microsoft Azure",
      linkTo: "https://azure.microsoft.com/en-us"
    },
    {
      name: "Miro",
      linkTo: "https://miro.com/"
    },
    {
      name: "Netlify",
      linkTo: "https://www.netlify.com/"
    },
    {
      name: "Notion",
      linkTo: "https://www.notion.so/"
    }
  ];
  $$result.css.add(css$4);
  return `<section class="flex-col svelte-4qy6j9"><div class="wrapper svelte-4qy6j9"><div class="flex-col svelte-4qy6j9" data-svelte-h="svelte-1aikrsi"><h1 class="svelte-4qy6j9">About me</h1><div class="divider svelte-4qy6j9"></div><h2 class="svelte-4qy6j9">Here you can find additional stuff before I come up with better text</h2></div><div class="about svelte-4qy6j9"><div class="about__description svelte-4qy6j9" data-svelte-h="svelte-1eb786u"><h2 class="svelte-4qy6j9">Who am I?</h2><p>I&#39;m a <b>full stack developer</b>. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. In dapibus augue non sapien. Aliquam id dolor. Nulla pulvinar eleifend sem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum.</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. In dapibus augue non sapien. Aliquam id dolor. Nulla pulvinar eleifend sem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum.</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. In dapibus augue non sapien. Aliquam id dolor. Nulla pulvinar eleifend sem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum.</p></div><div class="about__skills svelte-4qy6j9"><h1 class="svelte-4qy6j9" data-svelte-h="svelte-14einh2">Skills</h1><div><h2 class="svelte-4qy6j9" data-svelte-h="svelte-1w8bmy8">Skills</h2>${each(skills, (skill) => {
    return `${validate_component(SkillButton, "SkillButton").$$render($$result, { name: skill.name, linkTo: skill.linkTo }, {}, {})}`;
  })}</div><div><h2 class="svelte-4qy6j9" data-svelte-h="svelte-1w8bmy8">Skills</h2>${each(databaseTools, (skill) => {
    return `${validate_component(SkillButton, "SkillButton").$$render($$result, { name: skill.name, linkTo: skill.linkTo }, {}, {})}`;
  })}</div><div><h2 class="svelte-4qy6j9" data-svelte-h="svelte-1w8bmy8">Skills</h2>${each(otherTools, (skill) => {
    return `${validate_component(SkillButton, "SkillButton").$$render($$result, { name: skill.name, linkTo: skill.linkTo }, {}, {})}`;
  })}</div></div></div></div></section>`;
});
const Company_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "h1.svelte-1v87ikv.svelte-1v87ikv{font-size:3rem;margin-block-start:0;margin-block-end:0;margin-block:0}.divider.svelte-1v87ikv.svelte-1v87ikv{height:8px;width:30px;border-radius:8px;background-color:#888;margin:4px 0}.experience.svelte-1v87ikv.svelte-1v87ikv{width:100%;height:100%;display:flex;flex-direction:row;justify-content:center;gap:40px}.experience.svelte-1v87ikv .experience__img.svelte-1v87ikv{align-self:center}.experience.svelte-1v87ikv .experience__img img.svelte-1v87ikv{max-width:200px}.experience.svelte-1v87ikv .experience__content.svelte-1v87ikv{display:flex;flex-direction:column}.experience.svelte-1v87ikv .experience__content .experience__content__description.svelte-1v87ikv{margin-top:12px}.experience.svelte-1v87ikv .experience__content .experience__content__title.svelte-1v87ikv{margin-bottom:4px}",
  map: null
};
const Company = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imagePath } = $$props;
  let { title } = $$props;
  let { content } = $$props;
  if ($$props.imagePath === void 0 && $$bindings.imagePath && imagePath !== void 0)
    $$bindings.imagePath(imagePath);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  $$result.css.add(css$3);
  return `<div class="experience svelte-1v87ikv"><div class="experience__img svelte-1v87ikv"><img src="${"/images/company-logos/" + escape(imagePath, true) + ".png"}" alt="${escape(title, true) + " logo"}" class="svelte-1v87ikv"></div><div class="experience__content svelte-1v87ikv"><h1 class="experience__content__title svelte-1v87ikv">${escape(title)}</h1><div class="divider svelte-1v87ikv"></div><div class="experience__content__description svelte-1v87ikv">${escape(content)}</div><div class="experience__content__know-more">${validate_component(SkillButton, "SkillButton").$$render($$result, { name: "Know more", linkTo: "/" }, {}, {})}</div></div></div>`;
});
const Projects_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "section.svelte-okjq5t{min-height:90vh}section.svelte-okjq5t{background-color:rgb(240, 240, 240);display:flex;flex-direction:column;align-items:center}.wrapper.svelte-okjq5t{display:flex;flex-direction:column;gap:40px;width:50%}",
  map: null
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="svelte-okjq5t"><div class="wrapper svelte-okjq5t">${validate_component(Company, "Company").$$render(
    $$result,
    {
      imagePath: "level-works",
      title: "Level.works",
      content: "Level.works is a Rotterdam based company that connects flexible workers (freelancers) with companies. During my stay here, I've leveraged React, React Native, Some other shit and a bunch of other items that I need to write here"
    },
    {},
    {}
  )}${validate_component(Company, "Company").$$render(
    $$result,
    {
      imagePath: "logex-solution-centre",
      title: "LOGEX Solution Centre",
      content: "LOGEX is an Amsterdam based company that helps medical facilities get insight into their data. During my stay, I've been part of a company that has grown from 40 people across 2 countries to 300 people across 6 countries. I've been responsible for technical leadership of a product, as well as developing internal framework used by 60 developers, and I've helped the company with rebranding their product twice."
    },
    {},
    {}
  )}${validate_component(Company, "Company").$$render(
    $$result,
    {
      imagePath: "green-fox-academy",
      title: "Green Fox Academy",
      content: "Green Fox Academy is a hungarian company with a branch office in Czechia. When I was mentoring here, I was one of very few mentors whose students had 100 % success when finishing their final exams, as well as receiving their jobs within 2 weeks of finishing the bootcamp."
    },
    {},
    {}
  )}</div></section>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-gkg7yw.svelte-gkg7yw{background-color:black;color:white;display:flex;flex-direction:column;align-items:center}.about.svelte-gkg7yw.svelte-gkg7yw{width:50%;display:flex;flex-direction:row;justify-content:space-between;margin-top:2rem}.about.svelte-gkg7yw .about__socials.svelte-gkg7yw{display:flex;flex-direction:column}.about.svelte-gkg7yw .about__socials .about__socials__icons.svelte-gkg7yw{display:flex;flex-direction:row;gap:4px}.footer-divider.svelte-gkg7yw.svelte-gkg7yw{width:50%;height:4px;background-color:#eee;margin:1rem 0}.copyright.svelte-gkg7yw.svelte-gkg7yw{width:50%}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="svelte-gkg7yw"><div class="about svelte-gkg7yw" data-svelte-h="svelte-1gp6d6f"><div class="about__me"><div class="about__me__title">Simon Prochazka</div><div class="about__me__description">I&#39;m a full stack developer who does shit for funks</div></div><div class="about__socials svelte-gkg7yw"><div class="about__socials__title">Socials</div><div class="about__socials__icons svelte-gkg7yw"><div>WH</div><div>AT</div><div>EV</div><div>ER</div></div></div></div><div class="footer-divider svelte-gkg7yw"></div><div class="copyright svelte-gkg7yw">© Copyright ${escape((/* @__PURE__ */ new Date()).getFullYear())}. Made by <a href="/" target="_blank" data-svelte-h="svelte-1ec1dbn">Simon Prochazka</a>. Logo by <a href="https://www.hadraba.com/" target="_blank" data-svelte-h="svelte-7yqiew">Adam Hadraba</a>.</div></footer>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".site.svelte-ayh5i5{display:flex;flex-direction:column;min-height:100vh}main.svelte-ayh5i5{flex:1;display:flex;flex-direction:column;box-sizing:border-box}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="site svelte-ayh5i5">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}<main class="svelte-ayh5i5">${validate_component(Home, "Home").$$render($$result, {}, {}, {})}${validate_component(About, "About").$$render($$result, {}, {}, {})}${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}</main>${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
