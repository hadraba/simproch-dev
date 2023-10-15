import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","images/.DS_Store","images/company-logos/green-fox-academy.png","images/company-logos/level-works.png","images/company-logos/logex-solution-centre.png","images/icons/.DS_Store","images/icons/angular.svg","images/icons/circleci.svg","images/icons/cucumber.svg","images/icons/dot-net.svg","images/icons/expressjs.svg","images/icons/git.svg","images/icons/github.svg","images/icons/jest.svg","images/icons/jira.svg","images/icons/microsoft-azure.svg","images/icons/miro.svg","images/icons/mysql.svg","images/icons/nestjs.svg","images/icons/nodejs.svg","images/icons/notion.svg","images/icons/reactjs.svg","images/icons/sass.svg","images/icons/svelte.svg","images/logo.png","logo.png","simproch.jpeg"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".png":"image/png",".svg":"image/svg+xml",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.0e5edd9b.js","app":"_app/immutable/entry/app.b5c294ea.js","imports":["_app/immutable/entry/start.0e5edd9b.js","_app/immutable/chunks/scheduler.2853e907.js","_app/immutable/chunks/singletons.5f52bb9d.js","_app/immutable/entry/app.b5c294ea.js","_app/immutable/chunks/scheduler.2853e907.js","_app/immutable/chunks/index.47f9d4e0.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
