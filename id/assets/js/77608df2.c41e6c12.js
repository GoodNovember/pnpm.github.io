"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4175],{6530:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"/2021/12/29/yearly-update","metadata":{"permalink":"/id/blog/2021/12/29/yearly-update","editUrl":"https://crowdin.com/project/pnpm/id","source":"@site/i18n/id/docusaurus-plugin-content-blog/2021-12-29-yearly-update.md","title":"Tahun 2021 untuk pnpm","description":"Di penghujung tahun ini dan tahun ini merupakan sebuah tahun yang baik untuk pnpm, mari kita lihat bagaimana kelanjutannya.","date":"2021-12-29T00:00:00.000Z","formattedDate":"29 Desember 2021","tags":[],"readingTime":2.515,"truncated":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"frontMatter":{"title":"Tahun 2021 untuk pnpm","author":"Zoltan Kochan","authorURL":"http://twitter.com/zoltankochan","authorImageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},"nextItem":{"title":"Opsi konfigurasi Node-Modules dengan pnpm","permalink":"/id/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},"content":"Di penghujung tahun ini dan tahun ini merupakan sebuah tahun yang baik untuk pnpm, mari kita lihat bagaimana kelanjutannya.\\n\\n\x3c!--truncate--\x3e\\n\\n## Penggunaan\\n\\n### Statistik Unduhan\\n\\nMy goal this year was to beat Bower by the number of downloads. We were able to achieve this goal [in November](https://npm-stat.com/charts.html?package=pnpm&package=bower&from=2021-01-01&to=2021-12-29):\\n\\n![](/img/blog/pnpm-vs-bower-stats.png)\\n\\npnpm was downloaded about [3 times more](https://npm-stat.com/charts.html?package=pnpm&from=2016-12-01&to=2021-12-29) in 2021 than in 2020:\\n\\n![](/img/blog/download-stats-2021.png)\\n\\n:::note\\n\\nThese stats don\'t even measure all the different ways that pnpm may be installed! They only measure the downloads of the [pnpm npm package](https://www.npmjs.com/package/pnpm). This year we also added compiled binary versions of pnpm, which are shipped differently.\\n\\n:::\\n\\n### Kunjungan Dokumentasi\\n\\nWe collect some unpersonalized stats from our docs using Google Analytics. In 2021, sometimes we had more than 2,000 unique visitors a week.\\n\\n![](/img/blog/ga-unique-visits-2021.png)\\n\\nMost of our users are from the United States and China.\\n\\n![](/img/blog/countries-2021.png)\\n\\n### GitHub stars\\n\\nOur [main GitHub repository](https://github.com/pnpm/pnpm) received +5,000 stars this year.\\n\\n![](/img/blog/stars-2021.png)\\n\\n### New users\\n\\nOur biggest new user this year is [Bytedance](https://github.com/pnpm/pnpm.github.io/pull/89) (the company behind TikTok).\\n\\nAlso, many great open-source projects started to use pnpm. Some switched to pnpm because of its great support of monorepos:\\n\\n* [Vue](https://github.com/vuejs/vue-next)\\n* [Vite](https://github.com/vitejs/vite)\\n* and [others](https://pnpm.io/workspaces#usage-examples)\\n\\nSome switched because they like how efficient, fast, and beautiful pnpm is:\\n\\n* [Autoprefixer](https://twitter.com/Autoprefixer/status/1476226146488692736)\\n* [PostCSS](https://twitter.com/PostCSS/status/1470438664006258701)\\n* [Browserslist](https://twitter.com/Browserslist/status/1468264308308156419)\\n\\n## Feature Highlights\\n\\n### New lockfile format (since [v6.0.0](https://github.com/pnpm/pnpm/releases/tag/v6.0.0))\\n\\nOne of the first and most important changes this year was the new `pnpm-lock.yaml` format. This was a breaking change, so we had to release v6. But it was a success. The old lockfile was causing Git conflicts frequently. Since the new format was introduced, we did not receive any complaints about Git conflicts.\\n\\n### Managing Node.js versions (since [v6.12.0](https://github.com/pnpm/pnpm/releases/tag/v6.12.0))\\n\\nWe shipped a new command (`pnpm env`) that allows to manage Node.js versions. So you may use pnpm instead of Node.js version managers like nvm or Volta.\\n\\nAlso, pnpm is shipped as a standalone executable, so you can run it even with no Node.js preinstalled on the system.\\n\\n### Injecting local dependencies (since [v6.20.0](https://github.com/pnpm/pnpm/releases/tag/v6.20.0))\\n\\nYou may \\"inject\\" a local dependency. By default, local dependencies are symlinked to `node_modules` but with this new feature you may instruct pnpm to hard link the files of the package instead.\\n\\n### Improved reporting of peer dependency issues (since [v6.24.0](https://github.com/pnpm/pnpm/releases/tag/v6.24.0))\\n\\nPeer dependency issues used to be printed as plain text and it was hard to understand them. They are now all grouped and printed in a nice hierarchy structure.\\n\\n## The Competition\\n\\n### Yarn\\n\\nYarn added a pnpm linker in [v3.1](https://dev.to/arcanis/yarn-31-corepack-esm-pnpm-optional-packages--3hak#new-install-mode-raw-pnpm-endraw-). So Yarn can create a similar node-modules directory structure to the one that pnpm creates.\\n\\nAlso, the Yarn team plans to implement a content-addressable storage to be more disk space efficient.\\n\\n### npm\\n\\nThe npm team decided to also adopt the symlinked node-modules directory structure that pnpm uses (related [RFC](https://github.com/npm/rfcs/blob/main/accepted/0042-isolated-mode.md)).\\n\\n### Others\\n\\n[Bun](https://twitter.com/jarredsumner/status/1473416431291174912/photo/1) written in Zig and [Volt](https://github.com/voltpkg/volt) written in Rust both claim to be faster than npm/Yarn/pnpm. I did not benchmark these new package managers yet.\\n\\n## Rencana Kedepan\\n\\nLebih cepat, lebih baik, terbaik."},{"id":"/2020/10/17/node-modules-configuration-options-with-pnpm","metadata":{"permalink":"/id/blog/2020/10/17/node-modules-configuration-options-with-pnpm","editUrl":"https://crowdin.com/project/pnpm/id","source":"@site/i18n/id/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md","title":"Opsi konfigurasi Node-Modules dengan pnpm","description":"Ada banyak cara untuk membuat direktori nodemodules. Tujuan anda adalah untuk membuat direktori dengan mode strict semaksimal mungkin, medkipun demikian ada opsi untuk membuat nodemodules yang lebih longgar.","date":"2020-10-17T00:00:00.000Z","formattedDate":"17 Oktober 2020","tags":[],"readingTime":1.71,"truncated":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"frontMatter":{"title":"Opsi konfigurasi Node-Modules dengan pnpm","author":"Zoltan Kochan","authorURL":"http://twitter.com/zoltankochan","authorImageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},"prevItem":{"title":"Tahun 2021 untuk pnpm","permalink":"/id/blog/2021/12/29/yearly-update"},"nextItem":{"title":"Flat node_modules bukan satu-satunya cara","permalink":"/id/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},"content":"Ada banyak cara untuk membuat direktori node_modules. Tujuan anda adalah untuk membuat direktori dengan mode strict semaksimal mungkin, medkipun demikian ada opsi untuk membuat node_modules yang lebih longgar.\\n\\n\x3c!--truncate--\x3e\\n\\n## Pengaturan standar\\n\\nSecara standar, pnpm v5 akan membuat node_modules semi-ketat. Semi-ketat berarti aplikasi Anda hanya dapat meminta paket yang ditambahkan sebagai dependensi ke `package.json` (dengan beberapa pengecualian). Namun, dependensi Anda akan dapat mengakses paket apa pun.\\n\\nKonfigurasi standar terlihat seperti ini:\\n\\n```ini\\n; All packages are hoisted to node_modules/.pnpm/node_modules\\nhoist-pattern[]=*\\n\\n; All types are hoisted to the root in order to make TypeScript happy\\npublic-hoist-pattern[]=*types*\\n\\n; All ESLint-related packages are hoisted to the root as well\\npublic-hoist-pattern[]=*eslint*\\n```\\n\\n## Plug\'n\'Play. Konfigurasi paling ketat\\n\\npnpm mendukung [Yarn\'s Plug\'n\'Play](https://yarnpkg.com/features/pnp) sejak v5.9 dirilis. Dengan PnP, aplikasi Anda dan dependensi aplikasi Anda hanya akan memiliki akses ke dependensi yang dideklarasikan. This is even stricter then setting `hoist=false` because inside a monorepo, your application will not be able to access even the dependencies of the root project.\\n\\nUntuk menggunakan Plug\'n\'Play, gunakan konfigurasi berikut ini:\\n\\n```ini\\nnode-linker=pnp\\nsymlink=false\\n```\\n\\n## Mode ketat, tradisional module direktori\\n\\nJika anda belum siap untuk menggunakan Pnp, anda bisa menggunakan mode ketat dan hanya memperbolehkan packages untuk mengakses dependensi mereka sendiri dengan melakukan konfigurasi hoist ke false:\\n\\n```ini\\nhoist=false\\n```\\n\\nNamun, jika anda ingin beberapa dependensi mengakses packages yang tidak memiliki dependensi, anda memiliki dua opsi:\\n\\n1. Buat `pnpmfile.js` file dan gunakan [hook](/pnpmfile) untuk menambahkan dependensi yang hilang ke dalam package\'s manifest.\\n\\n2. Tambahkan pola ke pengaturan `hoist-pattern`. For instance, if the not found module is `babel-core`, add the following setting to `.npmrc`:\\n\\n    ```ini\\n    hoist-pattern[]=babel-core\\n    ```\\n\\n## The worst case - hoisting to the root\\n\\nSome tools might not work even with the default configuration of pnpm, which hoists everything to the root of the virtual store and some packages to the root. In this case, you can hoist either everything or a subset of dependencies to the root of the modules directory.\\n\\nHoisting everything to the root of node_modules:\\n\\n```ini\\nshamefully-hoist=true\\n```\\n\\nHoisting only packages that match a pattern:\\n\\n```ini\\npublic-hoist-pattern[]=babel-*\\n```"},{"id":"/2020/05/27/flat-node-modules-is-not-the-only-way","metadata":{"permalink":"/id/blog/2020/05/27/flat-node-modules-is-not-the-only-way","editUrl":"https://crowdin.com/project/pnpm/id","source":"@site/i18n/id/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md","title":"Flat node_modules bukan satu-satunya cara","description":"Pengguna baru pnpm sering bertanya kepada saya tentang struktur aneh node_modules yang dibuat pnpm. Kenapa tidak flat? Di mana semua sub-dependensi?","date":"2020-05-27T00:00:00.000Z","formattedDate":"27 Mei 2020","tags":[],"readingTime":2.435,"truncated":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"frontMatter":{"title":"Flat node_modules bukan satu-satunya cara","author":"Zoltan Kochan","authorURL":"http://twitter.com/zoltankochan","authorImageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},"prevItem":{"title":"Opsi konfigurasi Node-Modules dengan pnpm","permalink":"/id/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},"content":"Pengguna baru pnpm sering bertanya kepada saya tentang struktur aneh `node_modules` yang dibuat pnpm. Kenapa tidak flat? Di mana semua sub-dependensi?\\n\\n\x3c!--truncate--\x3e\\n\\n> Saya akan berasumsi bahwa pembaca artikel sudah terbiasa dengan flat `node_modules` dibuat oleh npm dan Yarn. Jika Anda tidak mengerti mengapa npm 3 harus mulai menggunakan flat `node_modules` di v3, Anda dapat menemukan beberapa prasejarah di [Mengapa kita harus menggunakan pnpm?](https://www.kochan.io/nodejs/why-should-we-use-pnpm.html).\\n\\nJadi mengapa `node_modules` pnpm tidak biasa? Mari buat dua direktori dan jalankan `npm add express` di salah satunya dan `pnpm add express` di direktori lainnya. Inilah bagian atas dari apa yang Anda dapatkan di direktori pertama `node_modules`:\\n\\n```text\\n.bin\\naccepts\\narray-flatten\\nbody-parser\\nbytes\\ncontent-disposition\\ncookie-signature\\ncookie\\ndebug\\ndepd\\ndestroy\\nee-first\\nencodeurl\\nescape-html\\netag\\nexpress\\n```\\n\\nAnda dapat melihat seluruh direktori [disini](https://github.com/zkochan/comparing-node-modules/tree/master/npm-example/node_modules).\\n\\nDan inilah yang Anda dapatkan di `node_modules` dibuat oleh pnpm:\\n\\n```text\\n.pnpm\\n.modules.yaml\\nexpress\\n```\\n\\nAnda dapat memeriksanya [disini](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules).\\n\\nJadi di mana semua dependensinya? Hanya ada satu folder di `node_modules` bernama `.pnpm` dan symlink bernama `express`. Nah, kami hanya menginstal `express`, jadi itu adalah satu-satunya paket yang dapat diakses oleh aplikasi Anda\\n\\n> Baca lebih lanjut tentang mengapa keketatan pnpm adalah hal yang baik [disini](https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308)\\n\\nMari kita lihat apa yang ada di dalam `express`:\\n\\n```text\\n\u25be node_modules\\n  \u25b8 .pnpm\\n  \u25be express\\n    \u25b8 lib\\n      History.md\\n      index.js\\n      LICENSE\\n      package.json\\n      Readme.md\\n  .modules.yaml\\n```\\n\\n`express` tidak memiliki `node_modules`? Di mana semua dependensi `express`?\\n\\nTriknya adalah `express` hanyalah sebuah symlink. Saat Node.js menyelesaikan dependensi, ia menggunakan lokasi sebenarnya, sehingga tidak mempertahankan symlink. Tapi di mana lokasi sebenarnya dari `express`, Anda mungkin bertanya?\\n\\nDi sini: [node_modules/.pnpm/express@4.17.1/node_modules/express](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules/express).\\n\\nOke, jadi sekarang kita tahu tujuan dari folder `.pnpm/`. `.pnpm/` menyimpan semua paket dalam struktur folder datar, sehingga setiap paket dapat ditemukan dalam folder yang dinamai dengan pola ini:\\n\\n```text\\n.pnpm/<name>@<version>/node_modules/<name>\\n```\\n\\nKami menyebutnya direktori virtual.\\n\\nStruktur datar ini menghindari masalah jalur panjang yang disebabkan oleh `node_modules` bersarang yang dibuat oleh npm v2 tetapi membuat paket tetap terisolasi tidak seperti `node_modules` datar yang dibuat oleh npm v3,4,5,6 atau Yarn v1.\\n\\nSekarang mari kita lihat lokasi sebenarnya dari `express`:\\n\\n```text\\n  \u25be express\\n    \u25b8 lib\\n      History.md\\n      index.js\\n      LICENSE\\n      package.json\\n      Readme.md\\n```\\n\\nApakah itu penipuan? Masih kekurangan `node_modules`! Trik kedua dari struktur `node_modules` pnpm adalah bahwa dependensi paket berada pada tingkat direktori yang sama dengan lokasi sebenarnya dari paket dependen. Jadi dependensi `express` tidak ada di `.pnpm/express@4.17.1/node_modules/express/node_modules/` tetapi dalam [.pnpm/express@4.17.1/node_modules/](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules):\\n\\n```text\\n\u25be node_modules\\n  \u25be .pnpm\\n    \u25b8 accepts@1.3.5\\n    \u25b8 array-flatten@1.1.1\\n    ...\\n    \u25be express@4.16.3\\n      \u25be node_modules\\n        \u25b8 accepts\\n        \u25b8 array-flatten\\n        \u25b8 body-parser\\n        \u25b8 content-disposition\\n        ...\\n        \u25b8 etag\\n        \u25be express\\n          \u25b8 lib\\n            History.md\\n            index.js\\n            LICENSE\\n            package.json\\n            Readme.md\\n```\\n\\nSemua dependensi `express` adalah symlink ke direktori yang sesuai di `node_modules/.pnpm/`. Menempatkan dependensi `express` satu tingkat ke atas memungkinkan menghindari symlink melingkar.\\n\\nJadi seperti yang Anda lihat, meskipun struktur `node_modules` pnpm tampak tidak biasa pada awalnya:\\n\\n1. itu sepenuhnya kompatibel dengan Node.js\\n2. paket dikelompokkan dengan baik dengan dependensinya\\n\\nStrukturnya sedikit [lebih kompleks](/how-peers-are-resolved) untuk paket dengan dependensi rekan tetapi idenya sama: menggunakan symlink untuk membuat sarang dengan struktur direktori datar."}]}')}}]);