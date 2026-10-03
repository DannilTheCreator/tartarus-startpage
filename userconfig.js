let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'saint petersburg, Russia',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "ы": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "chill",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [{
        name: "Social Media",
        links: [
          {
            name: "whatsapp",
            url: "https://web.whatsapp.com/",
            icon: "brand-whatsapp",
            icon_color: "#a9b665",
          },
          ],
      }, {
        name: "Music",
        links:[
          {
            name: "Spotify",
            url: "https://open.spotify.com/",
            icon: "brand-spotify",
            icon_color: "#a9b665"
          },
          {
            name: "YandexMusik",
            url: "https://music.yandex.ru",
            icon: "brand-bandlab",
            icon_color: "#fdee00"
          },
          {
            name: "SoundCloud",
            url: "https://soundcloud.com/",
            icon: "brand-soundcloud",
            icon_color: "#fdee00"
          },
          {
            name: "Bookmate",
            url: "https://books.yandex.ru/",
            icon: "book",
            icon_color: "#89b482"
          }
        ],
      },
       {
        name: "Video",
        links: [
          {
            name: "AnimeGO",
            url: "https://animego.org/",
            icon: "brand-funimation",
            icon_color: "#7daea3",
          },
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#ea6962",
          },
          {
            name: "rutube",
            url: "https://rutube.ru/",
            icon: "brand-youtube",
            icon_color: "#484848ff",
          },
          {
            name: "lampa",
            url: "http://lampa.mx/",
            icon: "lamp-2",
            icon_color: "#ea6962",
          },
        ],
      }],
    },
    {
      name: "design",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [
        {
          name: "inspiration",
          links: [
            {
              name: "pinterest",
              url: "https://www.pinterest.es/",
              icon: "brand-pinterest",
              icon_color: "#ea6962",
            },
            {
              name: "artstation",
              url: "https://www.artstation.com/?sort_by=community",
              icon: "chart-area",
              icon_color: "#7daea3",
            },
            {
              name: "leonardo ai",
              url: "https://app.leonardo.ai/",
              icon: "brand-openai",
              icon_color: "#89b482",
            },
            {
              name: "dribble",
              url: "https://dribbble.com/following",
              icon: "brand-dribbble-filled",
              icon_color: "#d3869b",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "figma",
              url: "https://www.figma.com",
              icon: "brand-figma",
              icon_color: "#d3869b",
            },
            {
              name: "uxpro",
              url: "https://uxpro.cc/",
              icon: "components",
              icon_color: "#a9b665",
            },
            {
              name: "colorhunt",
              url: "https://colorhunt.co/",
              icon: "color-picker",
              icon_color: "#ea6962",
            },
            {
              name: "adobe color",
              url: "https://color.adobe.com/es/create/color-wheel",
              icon: "brand-adobe",
              icon_color: "#7daea3",
            },
            {
              name: "canva",
              url: "https://www.canva.com/",
              icon: "circle-letter-c",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "resources 3d",
          links: [
            {
              name: "thingiverse",
              url: "https://www.thingiverse.com/",
              icon: "circle-letter-t",
              icon_color: "#7daea3",
            },
            {
              name: "sketchfab",
              url: "https://sketchfab.com/",
              icon: "circle-letter-s",
              icon_color: "#7daea3",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "repositories",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#7daea3",
            },
            {
              name: "gitlab",
              url: "https://gitlab.com/",
              icon: "brand-gitlab",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "phind",
              url: "https://www.phind.com/",
              icon: "brand-openai",
              icon_color: "#89b482",
            },
            {
              name: "flutter",
              url: "https://docs.flutter.dev/ui",
              icon: "brand-flutter",
              icon_color: "#7daea3",
            },
            {
              name: "hacktricks",
              url: "https://book.hacktricks.xyz/welcome/readme",
              icon: "biohazard",
              icon_color: "#ea6962",
            },
            {
              name: "vscode",
              url: "https://vscode.dev/",
              icon: "brand-vscode",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "hackthebox",
              url: "https://app.hackthebox.com",
              icon: "box",
              icon_color: "#a9b665",
            },
            {
              name: "cryptohack",
              url: "https://cryptohack.org/challenges/",
              icon: "brain",
              icon_color: "#e78a4e",
            },
            {
              name: "tryhackme",
              url: "https://tryhackme.com/dashboard",
              icon: "brand-onedrive",
              icon_color: "#ea6962",
            },
            {
              name: "hackerrank",
              url: "https://www.hackerrank.com/dashboard",
              icon: "code-asterix",
              icon_color: "#a9b665",
            },
            {
              name: "codewars",
              url: "https://www.codewars.com/",
              icon: "karate",
              icon_color: "#a9b665",
            },
          ],
        },
      ],
    },
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "mails",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
            {
              name: "mail.ru",
              url: "https://e.mail.ru/",
              icon: "mail",
              icon_color: "#ea6962",
            },
            {
              name: "yandex pochta",
              url: "https://mail.yandex.ru/",
              icon: "mail",
              icon_color: "#ea6962",
            }
          ],
        },
        {
          name: "storage",
          links: [
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#e78a4e",
            },
            {
              name: "dropbox",
              url: "https://www.dropbox.com/h?role=personal&di=left_nav",
              icon: "box-seam",
              icon_color: "#7daea3",
            },
            {
              name: "fotos",
              url: "https://photos.google.com/u/1",
              icon: "photo-filled",
              icon_color: "#ea6962",
            },
            {
              name: "nextcloud",
              url: "https://nextcloud.com/",
              icon: "brand-nextcloud",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "apps",
          links: [
            {
              name: "docs",
              url: "https://docs.google.com",
              icon: "file",
              icon_color: "#7daea3",
            },
            {
              name: "sheets",
              url: "https://docs.google.com/spreadsheets/u/0/?ec=wgc-sheets-hero-goto",
              icon: "file-spreadsheet",
              icon_color: "#7daea3",
            },
            {
              name: "typerun",
              url: "https://typerun.top/",
              icon: "keyboard",
              icon_color: "#7daea3",
            },
            {
            name: "monkeytype",
            url: "https://monkeytype.com/",
            icon: "keyboard",
            icon_color: "#e78a4e",
          }
          ],
        },
      ],
    },
    {
      name: "KPI",
      background_url: "src/img/banners/icegif-93.gif",
      categories: [
        {
          name: "banks",
          links: [
            {
              name: "Tbank",
              url: "https://www.tbank.ru/",
              icon: "letter-t",
              icon_color: "#ea6962",
            },
            {
              name: "Sberbank",
              url: "https://online.sberbank.ru",
              icon: "letter-s",
              icon_color: "#ea6962",
            },
            {
              name: "OZONbank",
              url: "https://finance.ozon.ru/",
              icon: "letter-o",
              icon_color: "#ea6962",
            },
            {
              name: "Family-budjet",
              url: "https://docs.google.com/spreadsheets/d/1C0_hvBmc2qE36xKjHxo-Ni6gJiMlr_yquNhD3RLbQXA/edit?gid=1840189844#gid=1840189844",
              icon: "wallet",
              icon_color: "#ea6962",
            },
            
          ],
        },
        {
          name: "frilance",
          links: [
            {
              name: "fiver",
              url: "https://www.fiverr.com/",
              icon: "brand-fiverr",
              icon_color: "#e78a4e",
            },
            {
              name: "upwork",
              url: "https://www.upwork.com/",
              icon: "brand-upwork",
              icon_color: "#7daea3",
            },
            {
              name: "profi.ru",
              url: "https://profi.ru/backoffice/",
              icon: "brand-upwork",
              icon_color: "#ea6962",
            },
            {
              name: "kwork",
              url: "https://kwork.ru/",
              icon: "forklift",
              icon_color: "#ea6962",
            },
            {
              name: "linkedin",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: "#7daea3",
            },
            {
              name: "fl.ru",
              url: "https://www.fl.ru/",
              icon: 'align-box-right-stretch',
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "productivity",
          links: [
            {
              name: "trello",
              url: "https://trello.com/",
              icon: "brand-trello",
              icon_color: "#7daea3",
            },
            {
              name: "habitica",
              url: "https://habitica.com/",
              icon: "load-balancer",
              icon_color: "#7daea3",
            },
            {
              name: "Zадачи",
              url: "https://calendar.google.com/calendar/u/0/r/tasks",
              icon: "checklist",
              icon_color: "#7daea3",
            },
          ],
        },
      ],
    },
    {
      name: "homelab",
      background_url: "src/img/banners/tony.gif",
      categories: [
        {
          name: "media",
          links:[
            {
              name: "Zадачи",
              url: "https://calendar.google.com/calendar/u/0/r/tasks",
              icon: "checklist",
              icon_color: "#7daea3"}
          ]
        }
      ],}
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
