// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/pages/index.html";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "This is a showcase of my GitHub account and a few of the repositories that I wanted to show off.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-resume",
          title: "resume",
          description: "This page highlights my experience, my education, and my skills.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Once I begin teaching, this page will be populated.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-role-playing-games",
              title: "role playing games",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/rpgs/";
              },
            },{id: "post-looking-forward",
        
          title: "looking forward",
        
        description: "Thinking about the future as I prepare to graduate.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/pages/2025/future/";
          
        },
      },{id: "post-an-unfamiliar-blog",
        
          title: "an unfamiliar blog",
        
        description: "This is my first actual post on this blog.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/pages/2025/anew/";
          
        },
      },{id: "books-the-hitchhikers-39-guide-to-the-galaxy",
          title: 'The Hitchhikers&amp;#39; Guide to the Galaxy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/hitchhikers/";
            },},{id: "books-house-of-leaves",
          title: 'House of Leaves',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/house_of_leaves/";
            },},{id: "books-at-the-mountains-of-madness",
          title: 'At The Mountains of Madness',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/mountains/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "rpgs-dungeons-and-dragons-5th-ed",
          title: 'Dungeons and Dragons 5th Ed',
          description: "",
          section: "Rpgs",handler: () => {
              window.location.href = "/rpgs/dnd%205e/";
            },},{id: "rpgs-chronicles-of-darkness-2nd-ed",
          title: 'Chronicles of Darkness 2nd Ed',
          description: "",
          section: "Rpgs",handler: () => {
              window.location.href = "/rpgs/cofd/";
            },},{id: "rpgs-prowlers-and-paragons-ultimate-ed",
          title: 'Prowlers and Paragons Ultimate Ed',
          description: "",
          section: "Rpgs",handler: () => {
              window.location.href = "/rpgs/prowler/";
            },},{id: "rpgs-pathfinder-2nd-ed",
          title: 'Pathfinder 2nd Ed',
          description: "",
          section: "Rpgs",handler: () => {
              window.location.href = "/rpgs/pf2e/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%65%6D%69%6C%79.%6E.%62%6C%75%6D%30%31@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
