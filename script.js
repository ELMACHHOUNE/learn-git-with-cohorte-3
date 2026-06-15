// ============================================================
// GitPro — Master Git & GitHub Course Platform
// ============================================================

// ===== COURSE DATA =====
const COURSE = [
  {
    id: 'foundations',
    title: 'Git Foundations',
    icon: 'book-open',
    lessons: [
      { id: 'f1', title: 'What is Version Control?' },
      { id: 'f2', title: 'Git vs GitHub' },
      { id: 'f3', title: 'How Git Thinks' },
      { id: 'f4', title: 'Module 1 Quiz' },
    ],
  },
  {
    id: 'setup',
    title: 'Setup & Configuration',
    icon: 'settings',
    lessons: [
      { id: 's1', title: 'Installing Git' },
      { id: 's2', title: 'First-Time Configuration' },
      { id: 's3', title: 'The .gitignore File' },
      { id: 's4', title: 'File Status Lifecycle' },
      { id: 's5', title: 'Module 2 Quiz' },
    ],
  },
  {
    id: 'basic',
    title: 'The Daily Workflow',
    icon: 'terminal',
    lessons: [
      { id: 'b1', title: 'git init — Starting Fresh' },
      { id: 'b2', title: 'git status — The Health Check' },
      { id: 'b3', title: 'git add — Staging Changes' },
      { id: 'b4', title: 'git commit — Taking Snapshots' },
      { id: 'b5', title: 'git log — Viewing History' },
      { id: 'b6', title: 'git diff — Spotting Changes' },
      { id: 'b7', title: 'Module 3 Quiz' },
    ],
  },
  {
    id: 'branching',
    title: 'Branching & Merging',
    icon: 'git-branch',
    lessons: [
      { id: 'br1', title: 'What Are Branches?' },
      { id: 'br2', title: 'Creating & Switching Branches' },
      { id: 'br3', title: 'Merging Branches' },
      { id: 'br4', title: 'Merge Conflicts' },
      { id: 'br5', title: 'Branching Strategies' },
      { id: 'br6', title: 'Module 4 Quiz' },
    ],
  },
  {
    id: 'remote',
    title: 'Remote Repositories',
    icon: 'cloud',
    lessons: [
      { id: 'r1', title: 'What is a Remote?' },
      { id: 'r2', title: 'git clone — Cloning Repos' },
      { id: 'r3', title: 'git remote — Managing Remotes' },
      { id: 'r4', title: 'git push — Uploading' },
      { id: 'r5', title: 'git pull & git fetch' },
      { id: 'r6', title: 'Module 5 Quiz' },
    ],
  },
  {
    id: 'collab',
    title: 'Collaboration',
    icon: 'users',
    lessons: [
      { id: 'c1', title: 'Forking Workflow' },
      { id: 'c2', title: 'Pull Requests' },
      { id: 'c3', title: 'Code Review Best Practices' },
      { id: 'c4', title: 'Module 6 Quiz' },
    ],
  },
  {
    id: 'advanced',
    title: 'Advanced Git',
    icon: 'zap',
    lessons: [
      { id: 'a1', title: 'git stash — Temporarily Saving' },
      { id: 'a2', title: 'git reset — Undoing Changes' },
      { id: 'a3', title: 'git revert — Safe Undo' },
      { id: 'a4', title: 'git rebase — Reapplying Commits' },
      { id: 'a5', title: 'Cherry-Picking & Tagging' },
      { id: 'a6', title: 'Module 7 Quiz' },
    ],
  },
  {
    id: 'cheatsheet',
    title: 'Cheat Sheet & Reference',
    icon: 'scroll-text',
    lessons: [
      { id: 'cs1', title: 'Complete Git Cheat Sheet' },
      { id: 'cs2', title: 'Best Practices' },
      { id: 'cs3', title: 'Final Mastery Quiz' },
    ],
  },
];

// ===== LESSON CONTENT =====
const LESSONS = {
  // -- Module 1: Foundations --
  f1: {
    type: 'content',
    title: 'What is Version Control?',
    badge: 'Module 1 — Foundations',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="info" class="w-4 h-4"></i> Understanding Version Control</h3>
          <p>A <strong>Version Control System (VCS)</strong> is like a time machine for your code. It records every change you make, allowing you to:</p>
          <ul>
            <li>Go back to any previous version of your project</li>
            <li>See who made which change and when</li>
            <li>Work on multiple features simultaneously without conflicts</li>
            <li>Collaborate with teammates without stepping on each other's toes</li>
          </ul>
          <p>Without version control, you end up with folders like <code>project_final_v3_actuallyfinal.zip</code>. We've all been there!</p>
        `,
      },
      {
        type: 'tip',
        content:
          'Version control is not just for code! You can use it for any text-based project: books, configuration files, legal documents, and more.',
      },
      {
        type: 'text',
        content: `
          <h3><i data-lucide="layers" class="w-4 h-4"></i> Types of Version Control</h3>
          <p><strong>Local VCS:</strong> Simple databases that store file changes on your local computer. Prone to losing data if your hard drive fails.</p>
          <p><strong>Centralized VCS (CVCS):</strong> A single server stores all versions. Examples: SVN, CVS. If the server goes down, nobody can collaborate.</p>
          <p><strong>Distributed VCS (DVCS):</strong> Every contributor has a full copy of the repository. <strong>Git</strong> is the most popular DVCS. If the server dies, anyone can restore it from their local copy.</p>
        `,
      },
      {
        type: 'terminal',
        lessonId: 'f1',
        initialContent: `<div class="info">💡 Welcome! Try typing your first Git command below.</div>`,
        commands: {
          'git --version': {
            output: 'git version 2.43.0\n(Your version may differ — that is totally fine!)',
            explanation: 'Check which version of Git is installed on your system.',
          },
          'git help': {
            output:
              'usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]\n           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]\n           [-p | --paginate | -P | --no-pager] [--no-replace-objects]\n           [--bare] [--git-dir=<path>] [--work-tree=<path>]\n           [--namespace=<name>] [--super-prefix=<path>]\n           <command> [<args>]\n\nThe most commonly used git commands are:\n   add        Add file contents to the index\n   branch     List, create, or delete branches\n   checkout   Switch branches or restore working tree files\n   clone      Clone a repository into a new directory\n   commit     Record changes to the repository\n   config     Get and set repository or global options\n   diff       Show changes between commits, commit and working tree, etc\n   fetch      Download objects and refs from another repository\n   init       Create an empty Git repository or reinitialize an existing one\n   log        Show commit logs\n   merge      Join two or more development histories together\n   pull       Fetch from and integrate with another repository or a local branch\n   push       Update remote refs along with associated objects\n   rebase     Reapply commits on top of another base tip\n   status     Show the working tree status\n\nSee "git help <command>" for more information on a specific command.',
            explanation: 'The help command lists all available Git commands and what they do.',
          },
        },
      },
    ],
  },

  f2: {
    type: 'content',
    title: 'Git vs GitHub',
    badge: 'Module 1 — Foundations',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="search" class="w-4 h-4"></i> The Big Confusion</h3>
          <p><strong>Git</strong> and <strong>GitHub</strong> are NOT the same thing. This is the #1 source of confusion for beginners. Let's settle it once and for all:</p>
        `,
      },
      {
        type: 'table',
        headers: ['', 'Git', 'GitHub'],
        rows: [
          ['What is it?', 'Software on your computer', 'A website / cloud service'],
          ['Purpose', 'Tracks versions locally', 'Hosts repos & enables collaboration'],
          ['Internet?', 'Works offline', 'Requires internet connection'],
          ['Cost', 'Free and open-source', 'Free for public repos; paid plans for private teams'],
          ['Analogy', 'A camera 📸', 'A photo album / Instagram 🌐'],
        ],
      },
      {
        type: 'tip',
        content:
          "🧠 <strong>Professor's Mental Model:</strong> Git is the camera that takes snapshots of your project. GitHub is Instagram where you upload and share those snapshots with the world.",
      },
      {
        type: 'text',
        content: `
          <h3><i data-lucide="github" class="w-4 h-4"></i> Other Git Hosting Platforms</h3>
          <p>While GitHub is the most popular, there are other platforms that host Git repositories:</p>
          <ul>
            <li><strong>GitLab</strong> — Offers built-in CI/CD and DevOps tools</li>
            <li><strong>Bitbucket</strong> — Deep integration with Atlassian products like Jira</li>
            <li><strong>SourceForge</strong> — One of the oldest hosting platforms</li>
          </ul>
          <p>The core Git commands are identical regardless of which platform you use. That's the beauty of Git — it's platform-agnostic!</p>
        `,
      },
    ],
  },

  f3: {
    type: 'content',
    title: 'How Git Thinks',
    badge: 'Module 1 — Foundations',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="brain" class="w-4 h-4"></i> The Three States of Git</h3>
          <p>Git has three main states that your files can be in. This is the single most important concept to understand:</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3 mb-3">
            <div class="bg-[#0a0e14] border border-[#21262d] rounded-lg p-3 text-center">
              <div class="text-[#ff7b72] text-lg font-bold mb-1">Modified</div>
              <div class="text-[#8b949e] text-xs">You changed the file but have not yet saved it to Git's database.</div>
            </div>
            <div class="bg-[#0a0e14] border border-[#21262d] rounded-lg p-3 text-center">
              <div class="text-[#d2a8ff] text-lg font-bold mb-1">Staged</div>
              <div class="text-[#8b949e] text-xs">You marked the file's changed version to go into your next commit.</div>
            </div>
            <div class="bg-[#0a0e14] border border-[#21262d] rounded-lg p-3 text-center">
              <div class="text-[#00ff41] text-lg font-bold mb-1">Committed</div>
              <div class="text-[#8b949e] text-xs">The data is safely stored in Git's local database permanently.</div>
            </div>
          </div>
          <p>The workflow is: <strong>Modify</strong> → <strong>Stage</strong> (<code>git add</code>) → <strong>Commit</strong> (<code>git commit</code>)</p>
        `,
      },
      {
        type: 'warning',
        content:
          '⚠️ Files in the "Modified" state are NOT backed up! Only committed data is safe. Get into the habit of committing early and often.',
      },
      {
        type: 'text',
        content: `
          <h3><i data-lucide="folder-tree" class="w-4 h-4"></i> The .git Folder</h3>
          <p>When you run <code>git init</code>, Git creates a hidden <code>.git</code> folder in your project. This folder contains <em>everything</em> Git needs — the entire history, all versions, and configuration.</p>
          <p><strong>Never delete or modify</strong> the .git folder manually unless you know exactly what you're doing. Doing so can corrupt your entire repository!</p>
        `,
      },
    ],
  },

  f4: { type: 'quiz', title: 'Module 1 Quiz', badge: 'Foundations Quiz', moduleId: 'foundations' },

  // -- Module 2: Setup --
  s1: {
    type: 'content',
    title: 'Installing Git',
    badge: 'Module 2 — Setup & Config',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="download" class="w-4 h-4"></i> Installing Git on Your System</h3>
          <p><strong>Windows:</strong></p>
          <ul>
            <li>Download from <a href="https://git-scm.com/download/win" class="text-[#58a6ff] underline" target="_blank">git-scm.com</a></li>
            <li>Run the installer with default settings</li>
            <li>You'll get <strong>Git Bash</strong> (a Unix-like terminal for Windows)</li>
          </ul>
          <p><strong>macOS:</strong></p>
          <ul>
            <li>Install Xcode Command Line Tools: <code>xcode-select --install</code></li>
            <li>Or via Homebrew: <code>brew install git</code></li>
          </ul>
          <p><strong>Linux (Ubuntu/Debian):</strong></p>
          <ul>
            <li><code>sudo apt update && sudo apt install git</code></li>
          </ul>
        `,
      },
      {
        type: 'terminal',
        lessonId: 's1',
        initialContent: `<div class="info">💡 Type <strong>git --version</strong> to confirm Git is installed!</div>`,
        commands: {
          'git --version': {
            output: 'git version 2.43.0',
            explanation: 'This confirms Git is installed and shows which version you have.',
          },
          'where git': {
            output: 'C:\\Program Files\\Git\\cmd\\git.exe\n(This path may vary on your system)',
            explanation: 'Shows the exact location of the Git executable on your system.',
          },
        },
      },
    ],
  },

  s2: {
    type: 'content',
    title: 'First-Time Configuration',
    badge: 'Module 2 — Setup & Config',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="user" class="w-4 h-4"></i> Introducing Yourself to Git</h3>
          <p>Before you make your first commit, Git needs to know who you are. Every commit is stamped with your name and email. Run these commands <strong>once</strong> in your terminal:</p>
          <div class="code-block">
            <span class="comment"># Set your name (use your real name)</span>
            <span class="keyword">git</span> <span class="variable">config</span> <span class="string">--global</span> <span class="function">user.name</span> <span class="string">"Your Name"</span>
          </div>
          <div class="code-block">
            <span class="comment"># Set your email (use the one linked to GitHub)</span>
            <span class="keyword">git</span> <span class="variable">config</span> <span class="string">--global</span> <span class="function">user.email</span> <span class="string">"your@email.com"</span>
          </div>
          <p>The <code>--global</code> flag sets this for all Git projects on your computer. Without it, the setting only applies to the current project.</p>
        `,
      },
      {
        type: 'tip',
        content:
          '💡 Use the same email address you use on GitHub so your commits are linked to your GitHub profile.',
      },
      {
        type: 'terminal',
        lessonId: 's2',
        initialContent: `<div class="info">💡 Try configuring Git and viewing your settings:</div>`,
        commands: {
          'git config --global user.name "Jane Doe"': {
            output: '',
            explanation: 'Sets your global Git username to "Jane Doe".',
          },
          'git config --global user.email "jane@example.com"': {
            output: '',
            explanation: 'Sets your global Git email to "jane@example.com".',
          },
          'git config --list': {
            output:
              'user.name=Jane Doe\nuser.email=jane@example.com\ncore.autocrlf=true\ncore.repositoryformatversion=0\n(Your config may show additional settings)',
            explanation: 'Lists all Git configuration settings currently in effect.',
          },
          'git config user.name': {
            output: 'Jane Doe',
            explanation: 'Shows the current value of a specific configuration key.',
          },
        },
      },
    ],
  },

  s3: {
    type: 'content',
    title: 'The .gitignore File',
    badge: 'Module 2 — Setup & Config',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="file-slash" class="w-4 h-4"></i> What is .gitignore?</h3>
          <p>The <code>.gitignore</code> file tells Git which files and folders to <strong>ignore</strong> — files you never want to commit. This is essential for keeping your repository clean and secure.</p>
          <p><strong>Common things to ignore:</strong></p>
          <ul>
            <li><code>node_modules/</code> — NPM dependencies (reinstallable via <code>npm install</code>)</li>
            <li><code>.env</code> — Environment variables with secrets and API keys</li>
            <li><code>*.log</code> — Log files generated by applications</li>
            <li><code>dist/</code>, <code>build/</code> — Compiled output</li>
            <li><code>.DS_Store</code> — macOS folder metadata</li>
            <li><code>Thumbs.db</code> — Windows thumbnail cache</li>
          </ul>
        `,
      },
      {
        type: 'warning',
        content:
          '🚨 NEVER commit API keys, passwords, or secrets to Git! Even in private repos. Once pushed, they are in the history forever. Use .gitignore and environment variables!',
      },
      {
        type: 'text',
        content: `
          <h3><i data-lucide="file-text" class="w-4 h-4"></i> Example .gitignore</h3>
          <div class="code-block">
            <span class="comment"># Dependencies</span>
            node_modules/
            <br><br>
            <span class="comment"># Environment variables</span>
            .env
            .env.local
            <br><br>
            <span class="comment"># Logs</span>
            *.log
            <br><br>
            <span class="comment"># Build outputs</span>
            dist/
            build/
            <br><br>
            <span class="comment"># OS files</span>
            .DS_Store
            Thumbs.db
          </div>
        `,
      },
    ],
  },

  s4: {
    type: 'content',
    title: 'File Status Lifecycle',
    badge: 'Module 2 — Setup & Config',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="refresh-cw" class="w-4 h-4"></i> The File Lifecycle</h3>
          <p>Every file in your working directory falls into one of these categories:</p>
          <div class="code-block">
            <span class="comment"># ┌─────────────┐</span>
            <span class="comment"># │  Untracked  │  ── New file, Git doesn't know about it</span>
            <span class="comment"># └──────┬──────┘</span>
            <span class="comment">#        │ git add</span>
            <span class="comment">#        ▼</span>
            <span class="comment"># ┌─────────────┐</span>
            <span class="comment"># │   Staged    │  ── Ready to be committed</span>
            <span class="comment"># └──────┬──────┘</span>
            <span class="comment">#        │ git commit</span>
            <span class="comment">#        ▼</span>
            <span class="comment"># ┌─────────────┐</span>
            <span class="comment"># │  Committed  │  ── Safely stored in Git history</span>
            <span class="comment"># └─────────────┘</span>
          </div>
          <ul>
            <li><strong>Untracked:</strong> New file, Git doesn't track it yet</li>
            <li><strong>Tracked:</strong> Git is watching this file
              <ul>
                <li><strong>Unmodified:</strong> Same as last commit</li>
                <li><strong>Modified:</strong> Changed since last commit</li>
                <li><strong>Staged:</strong> Marked for next commit</li>
              </ul>
            </li>
            <li><strong>Ignored:</strong> Git intentionally ignores this file (via .gitignore)</li>
          </ul>
        `,
      },
      {
        type: 'tip',
        content:
          '💡 Run <code>git status</code> constantly! It tells you exactly what state every file is in. Make it your most-used Git command.',
      },
    ],
  },

  s5: { type: 'quiz', title: 'Module 2 Quiz', badge: 'Setup & Config Quiz', moduleId: 'setup' },

  // -- Module 3: Daily Workflow --
  b1: {
    type: 'content',
    title: 'git init — Starting Fresh',
    badge: 'Module 3 — Daily Workflow',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="folder-plus" class="w-4 h-4"></i> Initializing a Repository</h3>
          <p>The <code>git init</code> command creates a new Git repository. It sets up all the internal data structures Git needs to start tracking your project.</p>
          <div class="code-block">
            <span class="comment"># Navigate to your project folder</span>
            cd my-project
            <br><br>
            <span class="comment"># Initialize Git</span>
            <span class="keyword">git</span> init
            <span class="comment"># Output: Initialized empty Git repository in /path/to/my-project/.git/</span>
          </div>
          <p>After running <code>git init</code>, a hidden <code>.git</code> folder is created. This is the heart of your repository.</p>
        `,
      },
      {
        type: 'terminal',
        lessonId: 'b1',
        initialContent: `<div class="info">💡 Try initializing a new Git repository!</div>`,
        commands: {
          'git init': {
            output: 'Initialized empty Git repository in /home/user/my-project/.git/',
            explanation:
              'Creates a new .git folder and starts tracking your project. Run this once at the start of every project.',
          },
          'git init my-app': {
            output: 'Initialized empty Git repository in /home/user/my-app/.git/',
            explanation:
              'Creates a new directory called "my-app" AND initializes a Git repo inside it, all in one command.',
          },
        },
      },
    ],
  },

  b2: {
    type: 'content',
    title: 'git status — The Health Check',
    badge: 'Module 3 — Daily Workflow',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="activity" class="w-4 h-4"></i> Checking the Status</h3>
          <p><code>git status</code> is the most frequently used Git command. It shows you:</p>
          <ul>
            <li>Which branch you're on</li>
            <li>Whether you have uncommitted changes</li>
            <li>Which files are staged vs unstaged</li>
            <li>Whether your branch is ahead/behind the remote</li>
          </ul>
        `,
      },
      {
        type: 'tip',
        content:
          "💡 If you're ever lost or unsure what's happening in your repository, type <code>git status</code>. It's Git's built-in compass.",
      },
      {
        type: 'terminal',
        lessonId: 'b2',
        initialContent: `<div class="info">💡 Check the status of a repo. First init it, then check!</div>`,
        commands: {
          'git status': {
            output:
              'On branch main\n\nNo commits yet\n\nnothing to commit (create/copy files and use "git add" to track)',
            explanation: 'Shows the current state of your repository. This tells you nothing has changed yet.',
          },
        },
      },
    ],
  },

  b3: {
    type: 'content',
    title: 'git add — Staging Changes',
    badge: 'Module 3 — Daily Workflow',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="plus-square" class="w-4 h-4"></i> Staging Your Files</h3>
          <p><code>git add</code> moves files from your working directory to the <strong>staging area</strong>. Think of it as telling Git: "I want these specific changes in my next snapshot."</p>
          <div class="code-block">
            <span class="comment"># Stage a specific file</span>
            <span class="keyword">git</span> add index.html
            <br><br>
            <span class="comment"># Stage all files in current directory</span>
            <span class="keyword">git</span> add .
            <br><br>
            <span class="comment"># Stage all .js files</span>
            <span class="keyword">git</span> add *.js
          </div>
        `,
      },
      {
        type: 'warning',
        content:
          '⚠️ Be careful with <code>git add .</code> — check <code>git status</code> first to avoid staging files you did not intend to (like .env or build files). Always use a .gitignore!',
      },
      {
        type: 'terminal',
        lessonId: 'b3',
        initialContent: `<div class="info">💡 First create a file, then stage it:</div>`,
        commands: {
          'echo "Hello Git" > README.md': {
            output: '',
            explanation: 'Creates a new file called README.md with "Hello Git" inside it.',
          },
          'git add README.md': {
            output: '',
            explanation: 'Stages the README.md file — it is now ready to be committed.',
          },
          'git add .': {
            output: '',
            explanation: 'Stages ALL changed files in the project. Use with care — check status first!',
          },
        },
      },
    ],
  },

  b4: {
    type: 'content',
    title: 'git commit — Taking Snapshots',
    badge: 'Module 3 — Daily Workflow',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="camera" class="w-4 h-4"></i> Committing: Your First Snapshot</h3>
          <p>A <strong>commit</strong> is a permanent snapshot of your staged changes. Each commit has:</p>
          <ul>
            <li>A unique <strong>hash</strong> (e.g., <code>a1b2c3d</code>)</li>
            <li>The <strong>author</strong> (name + email)</li>
            <li>A <strong>timestamp</strong></li>
            <li>A <strong>message</strong> describing what changed</li>
          </ul>
          <div class="code-block">
            <span class="comment"># Commit with a message</span>
            <span class="keyword">git</span> commit -m <span class="string">"Initial commit: Add README"</span>
          </div>
        `,
      },
      {
        type: 'tip',
        content:
          '📝 Write GOOD commit messages! "fixed stuff" is awful. "Fix login button alignment on iOS Safari" is excellent. Your future self and teammates will thank you.',
      },
      {
        type: 'terminal',
        lessonId: 'b4',
        initialContent: `<div class="info">💡 Stage a file first, then commit it:</div>`,
        commands: {
          'git commit -m "Initial commit"': {
            output:
              '[main (root-commit) a1b2c3d] Initial commit\n 1 file changed, 1 insertion(+)\n create mode 100644 README.md',
            explanation:
              'Creates a commit with the staged changes. The a1b2c3d is the unique commit hash prefix.',
          },
          'git commit -m "Add login feature"': {
            output:
              '[main 4e5f6g7] Add login feature\n 3 files changed, 45 insertions(+), 2 deletions(-)',
            explanation: 'Another commit. Hash is 4e5f6g7. Always use descriptive messages!',
          },
          'git commit': {
            output:
              'error: switch `m` requires a value\nusage: git commit [-m <msg>]',
            explanation:
              'If you forget -m, Git opens a text editor for you to write a message. Pro tip: use -m for quick commits!',
          },
        },
      },
    ],
  },

  b5: {
    type: 'content',
    title: 'git log — Viewing History',
    badge: 'Module 3 — Daily Workflow',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="history" class="w-4 h-4"></i> Exploring Your Commit History</h3>
          <p><code>git log</code> shows you the commit history of your repository. It's like a journal of everything that has happened.</p>
          <div class="code-block">
            <span class="comment"># Full log</span>
            <span class="keyword">git</span> log
            <br><br>
            <span class="comment"># One line per commit</span>
            <span class="keyword">git</span> log --oneline
            <br><br>
            <span class="comment"># Show last 3 commits</span>
            <span class="keyword">git</span> log -3
            <br><br>
            <span class="comment"># Show changes in each commit</span>
            <span class="keyword">git</span> log --patch
          </div>
        `,
      },
      {
        type: 'terminal',
        lessonId: 'b5',
        initialContent: `<div class="info">💡 View the commit history of this simulated repo:</div>`,
        commands: {
          'git log': {
            output:
              'commit 9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0\nAuthor: Jane Doe <jane@example.com>\nDate:   Mon Jun 15 14:30:00 2026 +0000\n\n    Add footer with social media links\n\ncommit a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0\nAuthor: Jane Doe <jane@example.com>\nDate:   Mon Jun 15 12:00:00 2026 +0000\n\n    Initial commit',
            explanation: 'Full log with author, date, and message for each commit.',
          },
          'git log --oneline': {
            output: '9f8e7d6 Add footer with social media links\na1b2c3d Initial commit',
            explanation: 'Compact view — just the commit hash prefix and message.',
          },
        },
      },
    ],
  },

  b6: {
    type: 'content',
    title: 'git diff — Spotting Changes',
    badge: 'Module 3 — Daily Workflow',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="file-diff" class="w-4 h-4"></i> Seeing What Changed</h3>
          <p><code>git diff</code> shows you the exact lines that changed in your files. Green lines are additions, red lines are deletions.</p>
          <div class="code-block">
            <span class="comment"># Changes not yet staged</span>
            <span class="keyword">git</span> diff
            <br><br>
            <span class="comment"># Changes already staged</span>
            <span class="keyword">git</span> diff --staged
            <br><br>
            <span class="comment"># Compare two commits</span>
            <span class="keyword">git</span> diff a1b2c3d..9f8e7d6
          </div>
        `,
      },
      {
        type: 'terminal',
        lessonId: 'b6',
        initialContent: `<div class="info">💡 See how diff shows changes between versions:</div>`,
        commands: {
          'git diff': {
            output:
              'diff --git a/README.md b/README.md\nindex e69de29..3b18e51 100644\n--- a/README.md\n+++ b/README.md\n@@ -0,0 +1,3 @@\n+# My Project\n+\n+Welcome to my awesome project!',
            explanation:
              'Shows unstaged changes. Lines with + are additions, - are deletions. Green represents new content.',
          },
          'git diff --staged': {
            output:
              'diff --git a/index.html b/index.html\nindex 1234567..89abcde 100644\n--- a/index.html\n+++ b/index.html\n@@ -5,6 +5,8 @@\n   <title>My Site</title>\n </head>\n <body>\n+  <h1>Hello World</h1>\n+  <p>This is a paragraph.</p>\n </body>\n </html>',
            explanation:
              'Shows changes that are staged and ready to be committed (added lines shown with +).',
          },
        },
      },
    ],
  },

  b7: { type: 'quiz', title: 'Module 3 Quiz', badge: 'Daily Workflow Quiz', moduleId: 'basic' },

  // -- Module 4: Branching --
  br1: {
    type: 'content',
    title: 'What Are Branches?',
    badge: 'Module 4 — Branching & Merging',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="git-branch" class="w-4 h-4"></i> Branching: Git's Superpower</h3>
          <p>A <strong>branch</strong> is like an alternate timeline for your code. It allows you to work on features, bug fixes, or experiments independently from the main codebase.</p>
          <p>Think of branches as <strong>parallel universes</strong> — changes in one branch don't affect others until you explicitly merge them.</p>
          <ul>
            <li><strong>main</strong> (or master) — The default branch, usually the production-ready code</li>
            <li><strong>feature/*</strong> — Branches for new features</li>
            <li><strong>bugfix/*</strong> — Branches for fixing bugs</li>
            <li><strong>hotfix/*</strong> — Urgent fixes for production</li>
          </ul>
        `,
      },
      {
        type: 'tip',
        content:
          '🌟 The main branch should ALWAYS be deployable. Never commit broken code to main! Create feature branches for all development work.',
      },
    ],
  },

  br2: {
    type: 'content',
    title: 'Creating & Switching Branches',
    badge: 'Module 4 — Branching & Merging',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="git-branch-plus" class="w-4 h-4"></i> Branch Commands</h3>
          <div class="code-block">
            <span class="comment"># List all branches</span>
            <span class="keyword">git</span> branch
            <br><br>
            <span class="comment"># Create a new branch</span>
            <span class="keyword">git</span> branch feature-navbar
            <br><br>
            <span class="comment"># Switch to a branch</span>
            <span class="keyword">git</span> checkout feature-navbar
            <br><br>
            <span class="comment"># Create AND switch (most common)</span>
            <span class="keyword">git</span> checkout -b feature-navbar
          </div>
        `,
      },
      {
        type: 'tip',
        content:
          "💡 Use <code>git checkout -b &lt;name&gt;</code> to create a branch and switch to it in one command. You'll use this pattern constantly!",
      },
      {
        type: 'terminal',
        lessonId: 'br2',
        initialContent: `<div class="info">💡 Practice creating and switching branches:</div>`,
        commands: {
          'git branch': {
            output: '* main',
            explanation: 'Lists all local branches. The * (asterisk) shows your current branch.',
          },
          'git checkout -b feature-login': {
            output: 'Switched to a new branch "feature-login"',
            explanation:
              'Creates a new branch called "feature-login" AND switches to it — all in one command.',
          },
          'git branch': {
            output: '  main\n* feature-login',
            explanation: 'Now there are two branches, and we are on "feature-login".',
          },
          'git checkout main': {
            output: 'Switched to branch "main"',
            explanation: 'Switches back to the main branch. Your files revert to match main.',
          },
          'git checkout -b hotfix-critical': {
            output: 'Switched to a new branch "hotfix-critical"',
            explanation: 'Quickly creates and switches to a hotfix branch from main.',
          },
        },
      },
    ],
  },

  br3: {
    type: 'content',
    title: 'Merging Branches',
    badge: 'Module 4 — Branching & Merging',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="git-merge" class="w-4 h-4"></i> Bringing Branches Together</h3>
          <p><code>git merge</code> combines changes from one branch into another. You typically merge a feature branch into main when the feature is complete.</p>
          <div class="code-block">
            <span class="comment"># First, switch to the branch you want to merge INTO</span>
            <span class="keyword">git</span> checkout main
            <br><br>
            <span class="comment"># Then merge the feature branch</span>
            <span class="keyword">git</span> merge feature-login
          </div>
          <p>Git tries to automatically combine changes. If it can't, you'll get a <strong>merge conflict</strong> (which we cover next).</p>
        `,
      },
      {
        type: 'terminal',
        lessonId: 'br3',
        initialContent: `<div class="info">💡 Simulate merging a feature branch into main:</div>`,
        commands: {
          'git checkout main': {
            output: 'Switched to branch "main"',
            explanation: 'Switch to main first (the branch we want to merge INTO).',
          },
          'git merge feature-login': {
            output:
              'Updating a1b2c3d..4e5f6g7\nFast-forward\n login.html | 25 +++++++++++++++++++++++++\n 1 file changed, 25 insertions(+)\n create mode 100644 login.html',
            explanation:
              'Fast-forward merge — the feature branch was ahead of main, so Git simply moves main forward.',
          },
          'git merge --no-ff feature-navbar': {
            output:
              'Merge made by the "ort" strategy.\n navbar.css | 10 +++++++\n navbar.html | 15 +++++++++++\n 2 files changed, 25 insertions(+)',
            explanation:
              'A 3-way merge creates a merge commit. The --no-ff flag forces a merge commit even for fast-forward situations.',
          },
        },
      },
    ],
  },

  br4: {
    type: 'content',
    title: 'Merge Conflicts',
    badge: 'Module 4 — Branching & Merging',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="alert-triangle" class="w-4 h-4"></i> What is a Merge Conflict?</h3>
          <p>A merge conflict happens when two branches modify the <strong>same line</strong> of the <strong>same file</strong> differently. Git doesn't know which version to keep, so it asks you to decide.</p>
          <p><strong>Don't panic!</strong> Merge conflicts are normal and happen to everyone — even experienced developers.</p>
          <p>Git marks the conflict in the file like this:</p>
          <div class="code-block">
            &lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD (your changes)
            console.log("Hello from feature");
            =======
            console.log("Hello from main");
            &gt;&gt;&gt;&gt;&gt;&gt;&gt; main
          </div>
          <p>To resolve: edit the file, keep the version you want, remove the conflict markers, then <code>git add</code> and <code>git commit</code>.</p>
        `,
      },
      {
        type: 'tip',
        content:
          '🛠️ Use VS Code, WebStorm, or any modern editor — they have built-in merge conflict tools that make resolving conflicts much easier with a visual interface.',
      },
    ],
  },

  br5: {
    type: 'content',
    title: 'Branching Strategies',
    badge: 'Module 4 — Branching & Merging',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="git-branch" class="w-4 h-4"></i> Popular Branching Models</h3>
          <p><strong>GitHub Flow</strong> (Simple):</p>
          <ul>
            <li><code>main</code> — always deployable</li>
            <li>Create feature branches from main</li>
            <li>Open a Pull Request to merge back</li>
            <li>Perfect for continuous deployment</li>
          </ul>
          <p><strong>Git Flow</strong> (Structured):</p>
          <ul>
            <li><code>main</code> — production-ready code</li>
            <li><code>develop</code> — integration branch</li>
            <li><code>feature/*</code> — branched from develop</li>
            <li><code>release/*</code> — preparing a release</li>
            <li><code>hotfix/*</code> — urgent production fixes</li>
          </ul>
          <p>Choose the strategy that fits your team's workflow. GitHub Flow is simpler; Git Flow is more structured.</p>
        `,
      },
    ],
  },

  br6: { type: 'quiz', title: 'Module 4 Quiz', badge: 'Branching & Merging Quiz', moduleId: 'branching' },

  // -- Module 5: Remote Repositories --
  r1: {
    type: 'content',
    title: 'What is a Remote?',
    badge: 'Module 5 — Remote Repositories',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="cloud" class="w-4 h-4"></i> Understanding Remotes</h3>
          <p>A <strong>remote</strong> is a version of your repository hosted on the internet or network (like GitHub, GitLab, or Bitbucket). It serves as:</p>
          <ul>
            <li>A <strong>backup</strong> — your code is safe even if your computer crashes</li>
            <li>A <strong>collaboration hub</strong> — teammates can push and pull changes</li>
            <li>A <strong>deployment source</strong> — services can deploy directly from your repo</li>
          </ul>
          <p>The default remote name is <strong>origin</strong>, but you can call it anything.</p>
        `,
      },
    ],
  },

  r2: {
    type: 'content',
    title: 'git clone — Cloning Repos',
    badge: 'Module 5 — Remote Repositories',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="copy" class="w-4 h-4"></i> Downloading a Repository</h3>
          <p><code>git clone</code> creates a local copy of a remote repository, including the entire history of all branches.</p>
          <div class="code-block">
            <span class="comment"># Clone over HTTPS</span>
            <span class="keyword">git</span> clone https://github.com/user/repo.git
            <br><br>
            <span class="comment"># Clone over SSH (no password prompt)</span>
            <span class="keyword">git</span> clone git@github.com:user/repo.git
            <br><br>
            <span class="comment"># Clone into a specific directory</span>
            <span class="keyword">git</span> clone https://github.com/user/repo.git my-folder
          </div>
        `,
      },
      {
        type: 'tip',
        content:
          '💡 <strong>HTTPS vs SSH:</strong> HTTPS is easier to start (no setup). SSH requires generating a key pair but avoids entering credentials each time.',
      },
      {
        type: 'terminal',
        lessonId: 'r2',
        initialContent: `<div class="info">💡 Simulate cloning a repository:</div>`,
        commands: {
          'git clone https://github.com/octocat/Hello-World.git': {
            output:
              'Cloning into "Hello-World"...\nremote: Enumerating objects: 100, done.\nremote: Total 100 (delta 10), reused 100 (delta 10)\nReceiving objects: 100% (100/100), done.\nResolving deltas: 100% (10/10), done.',
            explanation: 'Downloads the entire "Hello-World" repo with all history and branches.',
          },
          'git clone https://github.com/octocat/Spoon-Knife.git my-project': {
            output:
              'Cloning into "my-project"...\nremote: Enumerating objects: 50, done.\nReceiving objects: 100% (50/50), done.\nResolving deltas: 100% (5/5), done.',
            explanation:
              'Clones into a directory called "my-project" instead of the default "Spoon-Knife".',
          },
        },
      },
    ],
  },

  r3: {
    type: 'content',
    title: 'git remote — Managing Remotes',
    badge: 'Module 5 — Remote Repositories',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="link" class="w-4 h-4"></i> Connecting to Remote Repositories</h3>
          <div class="code-block">
            <span class="comment"># List remote connections</span>
            <span class="keyword">git</span> remote -v
            <br><br>
            <span class="comment"># Add a new remote</span>
            <span class="keyword">git</span> remote add origin https://github.com/user/repo.git
            <br><br>
            <span class="comment"># Remove a remote</span>
            <span class="keyword">git</span> remote remove origin
            <br><br>
            <span class="comment"># Change remote URL</span>
            <span class="keyword">git</span> remote set-url origin https://github.com/user/new-repo.git
          </div>
        `,
      },
      {
        type: 'terminal',
        lessonId: 'r3',
        initialContent: `<div class="info">💡 Practice connecting to a remote repository:</div>`,
        commands: {
          'git remote -v': {
            output: 'origin\thttps://github.com/user/repo.git (fetch)\norigin\thttps://github.com/user/repo.git (push)',
            explanation: 'Lists all remote connections. Shows both fetch and push URLs.',
          },
          'git remote add origin https://github.com/johndoe/my-app.git': {
            output: '',
            explanation:
              'Links your local repo to a remote repository on GitHub called "origin". Run this after creating an empty repo on GitHub.',
          },
          'git remote -v': {
            output:
              'origin\thttps://github.com/johndoe/my-app.git (fetch)\norigin\thttps://github.com/johndoe/my-app.git (push)',
            explanation: 'Now origin is connected to your GitHub repository.',
          },
        },
      },
    ],
  },

  r4: {
    type: 'content',
    title: 'git push — Uploading',
    badge: 'Module 5 — Remote Repositories',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="upload-cloud" class="w-4 h-4"></i> Sending Code to GitHub</h3>
          <p><code>git push</code> uploads your local commits to a remote repository. This is how you share your work with the world (or your team).</p>
          <div class="code-block">
            <span class="comment"># Push to origin, set upstream</span>
            <span class="keyword">git</span> push -u origin main
            <br><br>
            <span class="comment"># Push current branch to remote</span>
            <span class="keyword">git</span> push
            <br><br>
            <span class="comment"># Push a specific branch</span>
            <span class="keyword">git</span> push origin feature-branch
          </div>
          <p>The <code>-u</code> flag sets the upstream tracking, so future pushes can just use <code>git push</code>.</p>
        `,
      },
      {
        type: 'terminal',
        lessonId: 'r4',
        initialContent: `<div class="info">💡 Practice pushing code to GitHub:</div>`,
        commands: {
          'git push -u origin main': {
            output:
              'Enumerating objects: 5, done.\nCounting objects: 100% (5/5), done.\nDelta compression using up to 8 threads\nCompressing objects: 100% (3/3), done.\nWriting objects: 100% (5/5), 450 bytes | 450.00 KiB/s, done.\nTotal 5 (delta 1), reused 0 (delta 0)\nTo https://github.com/johndoe/my-app.git\n * [new branch]      main -> main\nBranch "main" set up to track remote branch "main" from "origin".',
            explanation:
              'First push: uploads all commits to GitHub and sets up tracking so future pushes can just use "git push".',
          },
          'git push origin feature-login': {
            output:
              'Enumerating objects: 3, done.\nCounting objects: 100% (3/3), done.\nWriting objects: 100% (3/3), 320 bytes | 320.00 KiB/s, done.\nTotal 3 (delta 0), reused 0 (delta 0)\nTo https://github.com/johndoe/my-app.git\n * [new branch]      feature-login -> feature-login',
            explanation: 'Pushes the feature-login branch to GitHub as a new remote branch.',
          },
        },
      },
    ],
  },

  r5: {
    type: 'content',
    title: 'git pull & git fetch',
    badge: 'Module 5 — Remote Repositories',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="download-cloud" class="w-4 h-4"></i> Downloading Changes</h3>
          <p><strong>git fetch</strong> — Downloads new changes from the remote but does NOT merge them. Safe to run anytime.</p>
          <p><strong>git pull</strong> — Downloads changes AND automatically merges them into your current branch. It's a shortcut for <code>git fetch</code> + <code>git merge</code>.</p>
          <div class="code-block">
            <span class="comment"># Fetch (safe, review first)</span>
            <span class="keyword">git</span> fetch origin
            <br><br>
            <span class="comment"># Pull (fetch + merge in one)</span>
            <span class="keyword">git</span> pull origin main
          </div>
        `,
      },
      {
        type: 'warning',
        content:
          '⚠️ <strong>The Golden Rule:</strong> Always <code>git pull</code> before <code>git push</code> when working on a shared branch. This ensures you have your teammates\' latest changes and prevents rejected pushes.',
      },
      {
        type: 'terminal',
        lessonId: 'r5',
        initialContent: `<div class="info">💡 Practice fetching and pulling:</div>`,
        commands: {
          'git fetch origin': {
            output:
              'From https://github.com/johndoe/my-app\n   4e5f6g7..8h9i0j1  main       -> origin/main\n   * [new branch]      feature-api -> origin/feature-api',
            explanation:
              'Downloads new data from remote without merging. Shows what changed and what new branches exist.',
          },
          'git pull origin main': {
            output:
              'From https://github.com/johndoe/my-app\n * branch            main       -> FETCH_HEAD\nUpdating 4e5f6g7..8h9i0j1\nFast-forward\n index.html | 5 +++++\n 1 file changed, 5 insertions(+)',
            explanation:
              'Fetches AND merges changes from remote main into your local branch in one step.',
          },
        },
      },
    ],
  },

  r6: { type: 'quiz', title: 'Module 5 Quiz', badge: 'Remote Repositories Quiz', moduleId: 'remote' },

  // -- Module 6: Collaboration --
  c1: {
    type: 'content',
    title: 'Forking Workflow',
    badge: 'Module 6 — Collaboration',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="git-fork" class="w-4 h-4"></i> Forking: Your Own Copy</h3>
          <p>A <strong>fork</strong> is a personal copy of someone else's repository on your GitHub account. It lives under YOUR account, and you have full control over it.</p>
          <p><strong>When to fork:</strong></p>
          <ul>
            <li>Contributing to open-source projects</li>
            <li>Experimenting with someone else's code without affecting the original</li>
            <li>Proposing changes to projects you don't have write access to</li>
          </ul>
          <p>The workflow is: <strong>Fork</strong> → <strong>Clone</strong> → <strong>Make changes</strong> → <strong>Push</strong> → <strong>Pull Request</strong></p>
        `,
      },
      {
        type: 'tip',
        content:
          '🌟 Forks are a GitHub concept, not a Git concept. They exist purely on GitHub. The actual Git operations (clone, push, pull) are standard Git commands.',
      },
    ],
  },

  c2: {
    type: 'content',
    title: 'Pull Requests',
    badge: 'Module 6 — Collaboration',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="git-pull-request" class="w-4 h-4"></i> Pull Requests (PRs)</h3>
          <p>A <strong>Pull Request</strong> is a formal request to merge changes from one branch into another. It's the centerpiece of collaboration on GitHub.</p>
          <p><strong>Parts of a Good PR:</strong></p>
          <ul>
            <li><strong>Title:</strong> Clear and descriptive (e.g., "Add user authentication with JWT")</li>
            <li><strong>Description:</strong> What changed, why, and how to test it</li>
            <li><strong>Reviewers:</strong> Teammates who will review your code</li>
            <li><strong>Labels:</strong> bug, enhancement, documentation, etc.</li>
          </ul>
        `,
      },
      {
        type: 'tip',
        content:
          '📝 Keep PRs small and focused. A PR with 500+ changed files is hard to review. Aim for PRs that change fewer than 200 lines. Your reviewers will love you!',
      },
    ],
  },

  c3: {
    type: 'content',
    title: 'Code Review Best Practices',
    badge: 'Module 6 — Collaboration',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="eye" class="w-4 h-4"></i> Giving & Receiving Feedback</h3>
          <p><strong>For Reviewers (giving feedback):</strong></p>
          <ul>
            <li>Be constructive and kind — focus on the code, not the person</li>
            <li>Explain WHY something should change, not just what</li>
            <li>Use "suggestions" feature for small fixes</li>
            <li>Approve once all major concerns are addressed</li>
          </ul>
          <p><strong>For Authors (receiving feedback):</strong></p>
          <ul>
            <li>Don't take feedback personally — it's about improving the code</li>
            <li>Respond to each comment (even just "Done" or "👍")</li>
            <li>Ask for clarification if something isn't clear</li>
            <li>Thank reviewers for their time</li>
          </ul>
        `,
      },
      {
        type: 'warning',
        content:
          "🚨 Never merge your own PR without review (unless it's a trivial hotfix). Two eyes are better than one — bugs that you miss will be caught by your reviewer.",
      },
    ],
  },

  c4: { type: 'quiz', title: 'Module 6 Quiz', badge: 'Collaboration Quiz', moduleId: 'collab' },

  // -- Module 7: Advanced Git --
  a1: {
    type: 'content',
    title: 'git stash — Temporarily Saving',
    badge: 'Module 7 — Advanced Git',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="archive" class="w-4 h-4"></i> Stashing: The Emergency Brake</h3>
          <p><code>git stash</code> temporarily saves your uncommitted changes and restores your working directory to a clean state. It's like saying "Save this for later, I need to switch context."</p>
          <div class="code-block">
            <span class="comment"># Save uncommitted changes</span>
            <span class="keyword">git</span> stash
            <br><br>
            <span class="comment"># Save with a descriptive message</span>
            <span class="keyword">git</span> stash push -m <span class="string">"WIP: login form validation"</span>
            <br><br>
            <span class="comment"># List stashes</span>
            <span class="keyword">git</span> stash list
            <br><br>
            <span class="comment"># Apply the most recent stash</span>
            <span class="keyword">git</span> stash pop
            <br><br>
            <span class="comment"># Apply a specific stash</span>
            <span class="keyword">git</span> stash apply stash@{2}
          </div>
        `,
      },
      {
        type: 'tip',
        content:
          '💡 Use stash when you need to quickly switch branches but are not ready to commit. The stash is stack-based — the most recent stash is always stash@{0}.',
      },
      {
        type: 'terminal',
        lessonId: 'a1',
        initialContent: `<div class="info">💡 Practice using git stash:</div>`,
        commands: {
          'git stash': {
            output: 'Saved working directory and index state WIP on main: a1b2c3d Add login feature',
            explanation: 'Temporarily saves uncommitted changes. Your working directory becomes clean.',
          },
          'git stash list': {
            output:
              'stash@{0}: WIP on main: a1b2c3d Add login feature\nstash@{1}: WIP on feature-nav: 9f8e7d6 Add navbar',
            explanation: 'Lists all stashes. The most recent is at the top (stash@{0}).',
          },
          'git stash pop': {
            output:
              'On branch main\nChanges not staged for commit:\n  modified:   login.html\n\nDropped refs/stash@{0} (a1b2c3d...)',
            explanation: 'Applies the most recent stash AND removes it from the stash list.',
          },
          'git stash push -m "Work in progress on navbar"': {
            output: 'Saved working directory and index state On main: Work in progress on navbar',
            explanation: 'Saves changes with a descriptive message for easier identification.',
          },
        },
      },
    ],
  },

  a2: {
    type: 'content',
    title: 'git reset — Undoing Changes',
    badge: 'Module 7 — Advanced Git',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="undo" class="w-4 h-4"></i> Resetting: Three Levels of Undo</h3>
          <p><code>git reset</code> moves the current branch pointer backward, effectively "undoing" commits. It has three modes:</p>
          <div class="code-block">
            <span class="comment"># --soft: Keeps changes staged</span>
            <span class="keyword">git</span> reset --soft HEAD~1
            <br><br>
            <span class="comment"># --mixed (default): Keeps changes in working directory</span>
            <span class="keyword">git</span> reset HEAD~1
            <br><br>
            <span class="comment"># --hard: DESTROYS changes completely</span>
            <span class="keyword">git</span> reset --hard HEAD~1
          </div>
          <p><strong>WARNING:</strong> <code>--hard</code> is dangerous! It permanently discards uncommitted changes. There is NO undo for reset --hard (in most cases).</p>
        `,
      },
      {
        type: 'warning',
        content:
          '🚨 DO NOT use <code>git reset</code> on commits that have already been pushed to a shared branch! Use <code>git revert</code> instead (next lesson).',
      },
      {
        type: 'terminal',
        lessonId: 'a2',
        initialContent: `<div class="info">💡 Practice different reset modes:</div>`,
        commands: {
          'git reset --soft HEAD~1': {
            output: '',
            explanation:
              'Undoes the last commit but keeps changes staged. You can re-commit with a different message.',
          },
          'git reset HEAD~1': {
            output:
              'Unstaged changes after reset:\nM\tlogin.html',
            explanation:
              'Undoes last commit AND unstages the changes. Files remain modified in working directory.',
          },
          'git reset --hard HEAD~1': {
            output:
              'HEAD is now at a1b2c3d Add login feature',
            explanation:
              '⚠️ DANGER: Completely removes the last commit AND all its changes. Only use this if you are 100% sure!',
          },
          'git reset a1b2c3d': {
            output: '',
            explanation:
              'Resets to a specific commit hash. All commits after it are undone (changes unstaged by default).',
          },
        },
      },
    ],
  },

  a3: {
    type: 'content',
    title: 'git revert — Safe Undo',
    badge: 'Module 7 — Advanced Git',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="rotate-ccw" class="w-4 h-4"></i> Reverting: The Safe Way</h3>
          <p><code>git revert</code> creates a NEW commit that undoes the changes from a previous commit. Unlike <code>reset</code>, it doesn't rewrite history — it's safe to use on shared branches.</p>
          <div class="code-block">
            <span class="comment"># Revert the last commit</span>
            <span class="keyword">git</span> revert HEAD
            <br><br>
            <span class="comment"># Revert a specific commit</span>
            <span class="keyword">git</span> revert a1b2c3d
          </div>
        `,
      },
      {
        type: 'tip',
        content:
          '✅ Always use <code>git revert</code> instead of <code>git reset</code> when working on shared branches. Revert is safe because it adds new history instead of deleting old history.',
      },
      {
        type: 'terminal',
        lessonId: 'a3',
        initialContent: `<div class="info">💡 Practice safe reverting:</div>`,
        commands: {
          'git revert HEAD': {
            output:
              '[main 8h9i0j1] Revert "Add login feature"\n 1 file changed, 25 deletions(-)\n delete mode 100644 login.html',
            explanation:
              'Creates a new commit that undoes the last commit. History is preserved — everyone knows the revert happened.',
          },
          'git revert a1b2c3d --no-edit': {
            output:
              '[main 2k3l4m5] Revert "Initial commit"\n 1 file changed, 1 deletion(-)',
            explanation: 'Reverts a specific commit without opening the editor (uses default message).',
          },
        },
      },
    ],
  },

  a4: {
    type: 'content',
    title: 'git rebase — Reapplying Commits',
    badge: 'Module 7 — Advanced Git',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="refresh-cw" class="w-4 h-4"></i> Rebasing: Cleaner History</h3>
          <p><code>git rebase</code> takes commits from one branch and reapplies them on top of another branch. It creates a <strong>linear history</strong> without merge commits.</p>
          <div class="code-block">
            <span class="comment"># Rebase feature onto main</span>
            <span class="keyword">git</span> checkout feature
            <span class="keyword">git</span> rebase main
            <br><br>
            <span class="comment"># Interactive rebase (squash, reorder commits)</span>
            <span class="keyword">git</span> rebase -i HEAD~3
          </div>
          <p><strong>Merge vs Rebase:</strong></p>
          <ul>
            <li><strong>Merge:</strong> Preserves context (good for public branches)</li>
            <li><strong>Rebase:</strong> Creates clean, linear history (good for local branches)</li>
          </ul>
        `,
      },
      {
        type: 'warning',
        content:
          "🚨 THE GOLDEN RULE OF REBASE: NEVER rebase commits that have been pushed to a shared branch! Only rebase local/unpushed commits. Rebase rewrites history — it's dangerous on shared branches.",
      },
      {
        type: 'terminal',
        lessonId: 'a4',
        initialContent: `<div class="info">💡 Practice rebasing:</div>`,
        commands: {
          'git rebase main': {
            output:
              'Successfully rebased and updated refs/heads/feature-login.\n',
            explanation:
              'Reapplies all commits from the current branch (feature-login) on top of main. History becomes linear.',
          },
          'git rebase -i HEAD~3': {
            output:
              'pick a1b2c3d Add login page\npick 4e5f6g7 Style login form\npick 9f8e7d6 Add form validation\n\n# Rebase 3 commits — use "squash" to combine commits',
            explanation:
              'Opens interactive rebase. You can reorder, squash (combine), or edit commits. Great for cleaning up before pushing.',
          },
        },
      },
    ],
  },

  a5: {
    type: 'content',
    title: 'Cherry-Picking & Tagging',
    badge: 'Module 7 — Advanced Git',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="cherry" class="w-4 h-4"></i> Cherry-Picking</h3>
          <p><code>git cherry-pick</code> lets you grab a specific commit from one branch and apply it to your current branch. It's like saying "I want THAT specific change, but not everything else."</p>
          <div class="code-block">
            <span class="comment"># Apply a specific commit to current branch</span>
            <span class="keyword">git</span> cherry-pick a1b2c3d
          </div>
          <h3 class="mt-4"><i data-lucide="tag" class="w-4 h-4"></i> Tagging</h3>
          <p>Tags mark specific points in history, typically for releases (v1.0, v2.0, etc.).</p>
          <div class="code-block">
            <span class="comment"># Create a lightweight tag</span>
            <span class="keyword">git</span> tag v1.0.0
            <br><br>
            <span class="comment"># Create an annotated tag (with message)</span>
            <span class="keyword">git</span> tag -a v1.0.0 -m <span class="string">"First stable release"</span>
            <br><br>
            <span class="comment"># Push tags to remote</span>
            <span class="keyword">git</span> push --tags
          </div>
        `,
      },
      {
        type: 'tip',
        content:
          '💡 Use semantic versioning (v<major>.<minor>.<patch>) for tags. Example: v1.2.3 means major version 1, minor release 2, patch 3.',
      },
    ],
  },

  a6: { type: 'quiz', title: 'Module 7 Quiz', badge: 'Advanced Git Quiz', moduleId: 'advanced' },

  // -- Module 8: Reference --
  cs1: {
    type: 'content',
    title: 'Complete Git Cheat Sheet',
    badge: 'Cheat Sheet',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="scroll-text" class="w-4 h-4"></i> Git Command Reference</h3>
          <p>Your go-to reference for every Git command you'll ever need:</p>
        `,
      },
      {
        type: 'table',
        headers: ['Category', 'Command', 'Action'],
        rows: [
          ['Setup', 'git config --global user.name "Name"', 'Set your Git username'],
          ['Setup', 'git config --global user.email "e@mail"', 'Set your Git email'],
          ['Setup', 'git clone [url]', 'Download a repo with full history'],
          ['Setup', 'git init', 'Create a new Git repository'],
          ['Daily', 'git status', 'Check file statuses'],
          ['Daily', 'git add [file]', 'Stage a file for commit'],
          ['Daily', 'git add .', 'Stage all changes'],
          ['Daily', 'git commit -m "msg"', 'Commit staged changes'],
          ['Daily', 'git log --oneline', 'View compact commit history'],
          ['Daily', 'git diff', 'Show unstaged changes'],
          ['Daily', 'git diff --staged', 'Show staged changes'],
          ['Branch', 'git branch', 'List local branches'],
          ['Branch', 'git branch [name]', 'Create a new branch'],
          ['Branch', 'git checkout [branch]', 'Switch to a branch'],
          ['Branch', 'git checkout -b [name]', 'Create + switch branch'],
          ['Branch', 'git merge [branch]', 'Merge a branch into current'],
          ['Remote', 'git remote -v', 'List remote connections'],
          ['Remote', 'git remote add origin [url]', 'Add a remote'],
          ['Remote', 'git push -u origin main', 'Push and set upstream'],
          ['Remote', 'git pull', 'Fetch + merge from remote'],
          ['Remote', 'git fetch', 'Download data without merging'],
          ['Advanced', 'git stash', 'Save uncommitted changes'],
          ['Advanced', 'git stash pop', 'Restore latest stash'],
          ['Advanced', 'git reset --soft HEAD~1', 'Undo commit, keep staged'],
          ['Advanced', 'git reset --hard HEAD~1', '⚠️ DESTROY last commit'],
          ['Advanced', 'git revert HEAD', 'Safe undo (new commit)'],
          ['Advanced', 'git rebase [branch]', 'Reapply commits on top'],
          ['Advanced', 'git cherry-pick [hash]', 'Apply specific commit'],
          ['Advanced', 'git tag -a v1.0 -m "msg"', 'Tag a release'],
          ['Advanced', 'git rebase -i HEAD~3', 'Interactive rebase'],
        ],
      },
    ],
  },

  cs2: {
    type: 'content',
    title: 'Best Practices',
    badge: 'Best Practices',
    sections: [
      {
        type: 'text',
        content: `
          <h3><i data-lucide="star" class="w-4 h-4"></i> Git Best Practices</h3>
          <p><strong>1. Commit Often, Push When Ready</strong></p>
          <p>Make small, focused commits locally. Push to remote when you have a logical set of changes.</p>
          <p><strong>2. Write Good Commit Messages</strong></p>
          <div class="code-block">
            <span class="comment"># Good: describes WHAT and WHY</span>
            feat: Add user authentication with JWT
            <br><br>
            <span class="comment"># Bad: too vague</span>
            fixed stuff
          </div>
          <p><strong>3. Always Use .gitignore</strong></p>
          <p>Never commit dependencies, secrets, or build artifacts. Use <a href="https://gitignore.io" class="text-[#58a6ff] underline" target="_blank">gitignore.io</a> to generate templates.</p>
          <p><strong>4. Pull Before Push</strong></p>
          <p>Always fetch/pull before pushing to avoid conflicts on shared branches.</p>
          <p><strong>5. Branch for Everything</strong></p>
          <p>Never commit directly to main. Every change gets its own branch, then merged via PR.</p>
          <p><strong>6. Don't Panic Over Conflicts</strong></p>
          <p>Merge conflicts are normal. Take it slow, use a visual merge tool, and carefully review the resolution.</p>
        `,
      },
    ],
  },

  cs3: { type: 'quiz', title: 'Final Mastery Quiz', badge: 'Final Quiz', moduleId: 'cheatsheet', final: true },
};

// ===== QUIZ DATA =====
const QUIZZES = {
  foundations: {
    questions: [
      {
        q: 'What is a Version Control System (VCS)?',
        options: [
          'A tool that automatically fixes bugs in your code',
          'A system that tracks changes to files over time',
          'A platform for deploying websites',
          'A code editor with built-in debugging',
        ],
        answer: 1,
      },
      {
        q: 'What is the key difference between Git and GitHub?',
        options: [
          'Git is for teams; GitHub is for individuals',
          'Git is local software; GitHub is a web platform',
          'They are the same thing',
          'Git costs money; GitHub is free',
        ],
        answer: 1,
      },
      {
        q: 'What are the three states of files in Git?',
        options: [
          'Draft, Review, Published',
          'Local, Remote, Forked',
          'Modified, Staged, Committed',
          'Open, Closed, Archived',
        ],
        answer: 2,
      },
      {
        q: 'What does the .git folder contain?',
        options: [
          'Your source code files',
          'Git\'s database and configuration',
          'A backup of your entire computer',
          'Your GitHub login credentials',
        ],
        answer: 1,
      },
      {
        q: 'Which Git concept is compared to a "camera taking snapshots"?',
        options: ['Branching', 'Forking', 'Committing', 'Pushing'],
        answer: 2,
      },
    ],
  },
  setup: {
    questions: [
      {
        q: 'Which command sets your Git username globally?',
        options: [
          'git user --global name "Name"',
          'git config --global user.name "Name"',
          'git set --global username "Name"',
          'git global --config name "Name"',
        ],
        answer: 1,
      },
      {
        q: 'What is the purpose of .gitignore?',
        options: [
          'To delete files permanently from the repo',
          'To tell Git which files to ignore',
          'To ignore all Git commands',
          'To backup files to the cloud',
        ],
        answer: 1,
      },
      {
        q: 'Which file should you NEVER commit to Git?',
        options: [
          'index.html',
          '.env (contains API keys)',
          'package.json',
          'README.md',
        ],
        answer: 1,
      },
      {
        q: 'What does the "global" flag in git config do?',
        options: [
          'Applies the setting to all projects on your computer',
          'Shares the setting with your team',
          'Uploads the setting to GitHub',
          'Only applies to the current folder',
        ],
        answer: 0,
      },
      {
        q: 'In the file lifecycle, what comes after "staged"?',
        options: ['Modified', 'Untracked', 'Committed', 'Deleted'],
        answer: 2,
      },
    ],
  },
  basic: {
    questions: [
      {
        q: 'What does "git init" do?',
        options: [
          'Downloads a repository from GitHub',
          'Creates a new Git repository in the current folder',
          'Initializes a GitHub account',
          'Installs Git on your computer',
        ],
        answer: 1,
      },
      {
        q: 'Which command shows the current state of your repository?',
        options: ['git log', 'git check', 'git status', 'git state'],
        answer: 2,
      },
      {
        q: 'What does "git add ." do?',
        options: [
          'Adds all files in the current project to the staging area',
          'Adds a single file named "." ',
          'Downloads a file with a dot in its name',
          'Adds all remote repositories',
        ],
        answer: 0,
      },
      {
        q: 'What is a commit?',
        options: [
          'A permanent snapshot of staged changes',
          'A temporary save that can be deleted',
          'A message to your team',
          'A command to delete files',
        ],
        answer: 0,
      },
      {
        q: 'What command shows a compact, one-line-per-commit history?',
        options: ['git history --short', 'git log --oneline', 'git show --compact', 'git status --log'],
        answer: 1,
      },
      {
        q: 'What does green text in "git diff" represent?',
        options: ['Deleted lines', 'Modified lines', 'Added lines', 'Error messages'],
        answer: 2,
      },
      {
        q: 'What is a good commit message?',
        options: [
          '"fixed stuff"',
          '"Fix login button alignment on mobile"',
          '"asdfgh"',
          '"update"',
        ],
        answer: 1,
      },
    ],
  },
  branching: {
    questions: [
      {
        q: 'A branch in Git is best described as:',
        options: [
          'A fork of the entire repository',
          'An alternate timeline for your code',
          'A copy of GitHub',
          'A backup file',
        ],
        answer: 1,
      },
      {
        q: 'Which command creates a NEW branch AND switches to it?',
        options: ['git branch new-feature', 'git checkout -b new-feature', 'git create new-feature', 'git switch new-feature'],
        answer: 1,
      },
      {
        q: 'What causes a merge conflict?',
        options: [
          'Two branches have different file names',
          'Two branches modify the same line of the same file differently',
          'One branch is empty',
          'Git is not installed properly',
        ],
        answer: 1,
      },
      {
        q: 'What does the asterisk (*) mean in "git branch" output?',
        options: [
          'The branch with errors',
          'The currently active branch',
          'The remote branch',
          'The default branch',
        ],
        answer: 1,
      },
      {
        q: 'In Git Flow, what is the "develop" branch used for?',
        options: [
          'Production-ready code',
          'Integration of features before release',
          'Personal experiments',
          'Backup of deleted branches',
        ],
        answer: 1,
      },
    ],
  },
  remote: {
    questions: [
      {
        q: 'What does "origin" typically refer to in Git?',
        options: [
          'The first commit ever made',
          'The default name for a remote repository',
          'The original author of the code',
          'A Git command for backups',
        ],
        answer: 1,
      },
      {
        q: 'What is the difference between "git fetch" and "git pull"?',
        options: [
          'They are identical commands',
          'Fetch downloads without merging; pull downloads and merges',
          'Fetch works offline; pull requires internet',
          'Fetch uploads files; pull downloads files',
        ],
        answer: 1,
      },
      {
        q: 'What does "git clone" do?',
        options: [
          'Creates a new empty repository',
          'Downloads a repository with all its history',
          'Makes a copy of a branch locally',
          'Duplicates the .git folder',
        ],
        answer: 1,
      },
      {
        q: 'What does the "-u" flag do in "git push -u origin main"?',
        options: [
          'Uploads files faster',
          'Sets upstream tracking for future pushes',
          'Undoes the last push',
          'Updates the remote name',
        ],
        answer: 1,
      },
      {
        q: 'The "Golden Rule" of team collaboration is:',
        options: [
          'Always work alone',
          'Pull before you push',
          'Never use branches',
          'Commit once a day',
        ],
        answer: 1,
      },
    ],
  },
  collab: {
    questions: [
      {
        q: 'What is a fork on GitHub?',
        options: [
          'A built-in code editor',
          'A personal copy of someone else\'s repository',
          'A type of branch',
          'A command to delete repos',
        ],
        answer: 1,
      },
      {
        q: 'What is a Pull Request (PR)?',
        options: [
          'A request to download a repository',
          'A formal request to merge changes into a repository',
          'A command to pull changes from GitHub',
          'A bug report',
        ],
        answer: 1,
      },
      {
        q: 'What is a best practice when reviewing code?',
        options: [
          'Focus on the person, not the code',
          'Be constructive and explain WHY',
          'Always approve immediately',
          'Reject everything on principle',
        ],
        answer: 1,
      },
      {
        q: 'What should you do before pushing to a shared branch?',
        options: [
          'Delete all local files',
          'Run git pull to get latest changes',
          'Create a new GitHub account',
          'Remove the .git folder',
        ],
        answer: 1,
      },
    ],
  },
  advanced: {
    questions: [
      {
        q: 'What does "git stash" do?',
        options: [
          'Permanently deletes uncommitted changes',
          'Temporarily saves uncommitted changes',
          'Creates a new branch',
          'Merges two branches',
        ],
        answer: 1,
      },
      {
        q: 'Which reset mode DESTROYS changes completely?',
        options: ['git reset --soft', 'git reset --mixed', 'git reset --hard', 'git reset --safe'],
        answer: 2,
      },
      {
        q: 'Why is "git revert" safer than "git reset" for shared branches?',
        options: [
          'It\'s faster',
          'It creates a new commit instead of deleting history',
          'It doesn\'t require internet',
          'It automatically backs up files',
        ],
        answer: 1,
      },
      {
        q: 'What does "git rebase" do?',
        options: [
          'Creates a backup of the repository',
          'Reapplies commits on top of another branch',
          'Downloads files from GitHub',
          'Permanently deletes old commits',
        ],
        answer: 1,
      },
      {
        q: 'What does "git cherry-pick a1b2c3d" do?',
        options: [
          'Deletes commit a1b2c3d',
          'Applies the specific commit a1b2c3d to the current branch',
          'Renames commit a1b2c3d',
          'Creates a new branch named a1b2c3d',
        ],
        answer: 1,
      },
      {
        q: 'What is tagging used for in Git?',
        options: [
          'Organizing files into categories',
          'Marking specific points in history (e.g., releases)',
          'Ignoring certain files',
          'Adding comments to code',
        ],
        answer: 1,
      },
    ],
  },
  cheatsheet: {
    questions: [
      {
        q: 'What is the number one best practice in Git?',
        options: [
          'Commit everything to main',
          'Always use .gitignore and branch for features',
          'Only use Git on Fridays',
          'Memorize all commands before starting',
        ],
        answer: 1,
      },
      {
        q: 'What does "git log --oneline" display?',
        options: [
          'All files in the repo',
          'One commit per line with hash and message',
          'Only the latest commit',
          'A list of all branches',
        ],
        answer: 1,
      },
      {
        q: 'Which command shows differences between working directory and staging area?',
        options: ['git status', 'git diff', 'git log', 'git show'],
        answer: 1,
      },
      {
        q: 'What is the recommended size for a Pull Request?',
        options: [
          'As large as possible (1000+ lines)',
          'Small and focused (under 200 lines is ideal)',
          'Exactly 500 lines',
          'Size doesn\'t matter',
        ],
        answer: 1,
      },
      {
        q: 'What happens when you run "git push --tags"?',
        options: [
          'Pushes only your tags directory',
          'Pushes all local tags to the remote repository',
          'Deletes all local tags',
          'Creates new branches for each tag',
        ],
        answer: 1,
      },
    ],
  },
};

// ===== APP STATE =====
let state = {
  currentModule: 0,
  currentLesson: 0,
  completedLessons: new Set(),
  quizScores: {},
  splashDone: false,
};

// ===== DOM REFS =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ===== SPLASH SCREEN =====
function runSplash() {
  const splash = $('#splash');
  const bar = $('#splash-progress');
  const app = $('#app');
  let p = 0;
  const steps = [10, 25, 40, 55, 70, 85, 95, 100];
  let i = 0;

  function tick() {
    if (i < steps.length) {
      bar.style.width = steps[i] + '%';
      i++;
      setTimeout(tick, 180);
    } else {
      splash.classList.add('opacity-0');
      setTimeout(() => {
        splash.classList.add('hidden');
        app.classList.remove('hidden');
        app.classList.add('flex');
        state.splashDone = true;
        initApp();
      }, 400);
    }
  }
  tick();
}

// ===== INIT =====
function initApp() {
  loadProgress();
  renderSidebar();
  renderLesson();
  lucide.createIcons();
}

// ===== SIDEBAR =====
function renderSidebar() {
  const list = $('#module-list');
  const mobileList = $('#mobile-module-list');
  list.innerHTML = '';
  mobileList.innerHTML = '';

  COURSE.forEach((mod, mi) => {
    const allDone = mod.lessons.every((l) => state.completedLessons.has(mod.id + '-' + l.id));
    const isActive = mi === state.currentModule;
    const item = document.createElement('div');

    const iconMap = {
      'book-open': 'book-open',
      settings: 'settings',
      terminal: 'terminal',
      'git-branch': 'git-branch',
      cloud: 'cloud',
      users: 'users',
      zap: 'zap',
      'scroll-text': 'scroll-text',
    };

    item.className = `module-item ${isActive ? 'active' : ''} ${allDone && mi !== state.currentModule ? 'completed' : ''}`;
    item.innerHTML = `
      <span class="icon"><i data-lucide="${iconMap[mod.icon] || 'book'}" class="w-4 h-4"></i></span>
      <span>${mod.title}</span>
      <span class="ml-auto text-[10px] text-[#484f58]">${mod.lessons.length}</span>
    `;
    item.onclick = () => selectModule(mi);
    list.appendChild(item);

    // Clone for mobile
    const mItem = item.cloneNode(true);
    mItem.onclick = () => { selectModule(mi); toggleSidebar(); };
    mobileList.appendChild(mItem);
  });
}

function renderLessonList() {
  const mod = COURSE[state.currentModule];
  // We don't render separate lesson list in sidebar currently
  // But we update the counters
}

function selectModule(index) {
  state.currentModule = index;
  state.currentLesson = 0;
  renderSidebar();
  renderLesson();
  saveProgress();
  lucide.createIcons();
}

function selectLesson(index) {
  state.currentLesson = index;
  renderLesson();
  renderSidebar();
  saveProgress();
  window.scrollTo(0, 0);
}

// ===== RENDER LESSON =====
function renderLesson() {
  const mod = COURSE[state.currentModule];
  const lessonId = mod.lessons[state.currentLesson].id;
  const lesson = LESSONS[lessonId];
  const container = $('#lesson-content');
  const titleEl = $('#module-title');
  const badgeEl = $('#module-badge');
  const counterEl = $('#lesson-counter');
  const prevBtn = $('#prev-lesson');
  const nextBtn = $('#next-lesson');

  titleEl.textContent = lesson.title;
  badgeEl.textContent = lesson.badge;
  counterEl.textContent = `${state.currentLesson + 1} / ${mod.lessons.length}`;
  prevBtn.disabled = state.currentLesson === 0;
  nextBtn.disabled = state.currentLesson === mod.lessons.length - 1;

  prevBtn.onclick = () => { if (state.currentLesson > 0) selectLesson(state.currentLesson - 1); };
  nextBtn.onclick = () => {
    markCurrentComplete();
    if (state.currentLesson < mod.lessons.length - 1) selectLesson(state.currentLesson + 1);
  };

  if (lesson.type === 'quiz') {
    renderQuiz(container, lesson.moduleId, lesson.final);
    updateProgress();
    return;
  }

  let html = '';
  lesson.sections.forEach((sec, si) => {
    if (sec.type === 'text') {
      html += `<div class="lesson-section fade-in" style="animation-delay:${si * 0.05}s">${sec.content}</div>`;
    } else if (sec.type === 'tip') {
      html += `<div class="tip-box fade-in" style="animation-delay:${si * 0.05}s"><strong>💡 Pro Tip:</strong> ${sec.content}</div>`;
    } else if (sec.type === 'warning') {
      html += `<div class="warning-box fade-in" style="animation-delay:${si * 0.05}s">${sec.content}</div>`;
    } else if (sec.type === 'table') {
      html += `<div class="lesson-section fade-in" style="animation-delay:${si * 0.05}s"><div class="overflow-x-auto"><table class="command-table"><thead><tr>`;
      sec.headers.forEach((h) => { html += `<th>${h}</th>`; });
      html += `</tr></thead><tbody>`;
      sec.rows.forEach((r) => {
        html += '<tr>';
        r.forEach((c) => { html += `<td>${c}</td>`; });
        html += '</tr>';
      });
      html += `</tbody></table></div></div>`;
    } else if (sec.type === 'terminal') {
      html += buildTerminal(sec, si);
    }
  });

  container.innerHTML = html;
  lucide.createIcons();
  updateProgress();
}

// ===== TERMINAL =====
function buildTerminal(section, index) {
  const id = `terminal-${index}`;
  return `
    <div class="terminal-window fade-in" style="animation-delay:${index * 0.05}s">
      <div class="terminal-header">
        <span class="terminal-dot bg-[#f85149]"></span>
        <span class="terminal-dot bg-[#d29922]"></span>
        <span class="terminal-dot bg-[#00ff41]"></span>
        <span class="text-[#8b949e] text-xs ml-2">bash — terminal</span>
      </div>
      <div class="terminal-body" id="${id}-body">
        <div class="terminal-output">${section.initialContent}</div>
        <div class="terminal-input-line">
          <span class="terminal-prompt">$</span>
          <input type="text" class="terminal-input" id="${id}-input" placeholder="Type a git command..." spellcheck="false" autocomplete="off" />
        </div>
      </div>
      <div id="${id}-explanation" class="px-4 pb-3 text-xs text-[#8b949e] border-t border-[#21262d] pt-2 hidden"></div>
      <div class="px-4 pb-3 flex gap-2 text-xs">
        <button class="terminal-clear px-2 py-1 rounded bg-[#21262d] text-[#8b949e] hover:text-white hover:bg-[#30363d] transition-colors" data-terminal="${id}">clear</button>
        <button class="terminal-reset px-2 py-1 rounded bg-[#21262d] text-[#8b949e] hover:text-white hover:bg-[#30363d] transition-colors" data-terminal="${id}">reset</button>
      </div>
    </div>
  `;
}

function findMatchingCommand(input, cmds) {
  if (cmds[input]) return cmds[input];

  const keys = Object.keys(cmds);
  const ciMatch = keys.find((k) => k.toLowerCase() === input.toLowerCase());
  if (ciMatch) return cmds[ciMatch];

  const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  for (const key of keys) {
    let p = esc(key);
    p = p.replace(/"[^"]+"/g, '".*?"');
    if (!key.endsWith('"')) {
      const parts = key.split(' ');
      const last = parts[parts.length - 1];
      if (last && last.length > 1 && !last.startsWith('-')) {
        p = p.slice(0, -last.length) + '\\S+';
      }
    }
    try {
      if (new RegExp('^' + p + '$', 'i').test(input)) return cmds[key];
    } catch (_) {}
  }

  for (const key of keys) {
    const stripQ = (s) => s.replace(/"[^"]*"/g, '""').split(/\s+/).slice(0, -1).join(' ');
    const kb = stripQ(key), ib = stripQ(input);
    if (kb === ib && kb.length > 4) {
      return { output: cmds[key].output, explanation: cmds[key].explanation };
    }
  }

  return null;
}

function setupTerminal(container) {
  container.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const input = e.target;
      if (!input.classList.contains('terminal-input')) return;
      const id = input.id.replace('-input', '');
      const val = input.value.trim().toLowerCase();
      const body = document.getElementById(id + '-body');
      const expl = document.getElementById(id + '-explanation');

      if (!val) return;

      // Find the section with this terminal
      let section = null;
      let lessonId = null;
      for (const key in LESSONS) {
        const l = LESSONS[key];
        if (l.type === 'content' && l.sections) {
          for (const s of l.sections) {
            if (s.type === 'terminal' && s.lessonId && body.closest('.terminal-window')?.querySelector(`[data-terminal]`)?.dataset?.terminal?.includes(s.lessonId)) {
              section = s;
              lessonId = s.lessonId;
              break;
            }
          }
        }
      }

      // Fallback: search by terminal id structure
      if (!section) {
        for (const key in LESSONS) {
          const l = LESSONS[key];
          if (l.type === 'content' && l.sections) {
            for (const s of l.sections) {
              if (s.type === 'terminal' && id.includes(`terminal-${l.sections.indexOf(s)}`)) {
                section = s;
                lessonId = s.lessonId;
                break;
              }
            }
          }
        }
      }

      const inputLine = input.closest('.terminal-input-line');
      const prompt = inputLine?.querySelector('.terminal-prompt')?.textContent || '$';
      const fullCmd = input.value.trim();

      // Add command to terminal output
      const cmdDiv = document.createElement('div');
      cmdDiv.className = 'terminal-output';
      cmdDiv.innerHTML = `<span class="terminal-prompt">${prompt}</span> <span class="cmd">${escapeHtml(fullCmd)}</span>`;
      body.insertBefore(cmdDiv, inputLine);

      // Handle clear command
      if (fullCmd.toLowerCase() === 'clear') {
        const id = input.id.replace('-input', '');
        const b = document.getElementById(id + '-body');
        const e = document.getElementById(id + '-explanation');
        if (b) {
          const il = b.querySelector('.terminal-input-line');
          const first = b.querySelector('.terminal-output');
          b.innerHTML = '';
          if (first) b.appendChild(first.cloneNode(true));
          if (il) b.appendChild(il);
        }
        if (e) e.classList.add('hidden');
        input.focus();
        return;
      }

      // Get response with smart matching
      const cmds = section?.commands || {};
      let resp = findMatchingCommand(fullCmd, cmds);

      const outDiv = document.createElement('div');
      outDiv.className = 'terminal-output';
      if (resp) {
        let output = resp.output;
        if (output) {
          outDiv.innerHTML = output.replace(/\n/g, '<br>');
        }
        if (resp.explanation) {
          expl.innerHTML = `<span class="text-[#58a6ff]">→</span> ${resp.explanation}`;
          expl.classList.remove('hidden');
        }
      } else {
        const isGitCmd = fullCmd.startsWith('git ') || fullCmd === 'git' || fullCmd.startsWith('echo') || fullCmd.startsWith('cd ') || fullCmd.startsWith('where');
        if (isGitCmd) {
          outDiv.innerHTML = `<span class="error">⚠️ Simulated terminal — that git command isn't defined for this lesson.</span><br><span class="dim">Try one of: ${Object.keys(cmds).slice(0, 5).map(c => '<code>' + escapeHtml(c) + '</code>').join(', ')}${Object.keys(cmds).length > 5 ? '…' : ''}</span>`;
        } else {
          outDiv.innerHTML = `<span class="error">Command not recognized: ${escapeHtml(fullCmd)}</span>`;
        }
        expl.classList.add('hidden');
      }
      body.insertBefore(outDiv, inputLine);

      input.value = '';
      body.scrollTop = body.scrollHeight;
    }
  });

  // Clear and reset buttons
  container.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-terminal]');
    if (!btn) return;
    const id = btn.dataset.terminal;
    const body = document.getElementById(id + '-body');
    const expl = document.getElementById(id + '-explanation');
    const input = document.getElementById(id + '-input');

    if (btn.classList.contains('terminal-clear')) {
      // Keep only the initial content and input line
      const initContent = body.querySelector('.terminal-output');
      const inputLine = body.querySelector('.terminal-input-line');
      body.innerHTML = '';
      if (initContent) body.appendChild(initContent.cloneNode(true));
      body.appendChild(inputLine);
      expl.classList.add('hidden');
    } else if (btn.classList.contains('terminal-reset')) {
      body.innerHTML = body.innerHTML; // keeps the same
      // Reload the page section
      location.reload(); // simple approach for demo
    }
    if (input) input.focus();
  });

  // Auto-focus inputs
  container.addEventListener('click', (e) => {
    const input = e.target.closest('.terminal-window')?.querySelector('.terminal-input');
    if (input) input.focus();
  });
}

// ===== QUIZ =====
function renderQuiz(container, moduleId, isFinal) {
  const quiz = QUIZZES[moduleId];
  if (!quiz) {
    container.innerHTML = '<div class="lesson-section"><p class="text-[#f85149]">Quiz not found.</p></div>';
    return;
  }

  const hasPassed = state.quizScores[moduleId]?.passed;
  const prevScore = state.quizScores[moduleId]?.score;
  const totalQ = quiz.questions.length;

  let html = `<div class="lesson-section quiz-section fade-in">`;
  html += `<div class="flex items-center justify-between mb-4">`;
  html += `<h3><i data-lucide="${isFinal ? 'award' : 'check-circle'}" class="w-4 h-4"></i> ${isFinal ? '🏆 Final Mastery Quiz' : '📝 Knowledge Check'}</h3>`;
  if (hasPassed) {
    html += `<span class="result-badge pass">✅ Passed — ${prevScore}/${totalQ}</span>`;
  }
  html += `</div>`;
  html += `<p class="text-[#8b949e] text-xs mb-4">Answer all ${totalQ} questions. You need 60% to pass.</p>`;

  quiz.questions.forEach((q, qi) => {
    html += `<div class="mb-5 quiz-block" data-q="${qi}">`;
    html += `<p class="text-sm font-medium mb-2 text-white">${qi + 1}. ${q.q}</p>`;
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, oi) => {
      const disabled = hasPassed ? 'disabled' : '';
      const correctClass = hasPassed && oi === q.answer ? 'correct' : '';
      const wrongClass = hasPassed && state.quizScores[moduleId]?.wrong?.[qi] === oi ? 'wrong' : '';
      html += `<button class="quiz-option ${disabled} ${correctClass} ${wrongClass}" data-q="${qi}" data-opt="${oi}" ${hasPassed ? 'disabled' : ''}>`;
      html += `<span class="option-letter">${letters[oi]}</span> ${escapeHtml(opt)}`;
      html += `</button>`;
    });
    if (hasPassed) {
      html += `<div class="text-xs text-[#00ff41] mt-1">✅ Correct answer: ${letters[q.answer]}</div>`;
    }
    html += `</div>`;
  });

  if (!hasPassed) {
    html += `<button id="quiz-submit" class="px-4 py-2 rounded-lg bg-[#1f6feb] text-white text-sm font-medium hover:bg-[#388bfd] transition-colors">Submit Answers</button>`;
  } else {
    html += `<button id="quiz-retry" class="px-4 py-2 rounded-lg bg-[#21262d] text-[#8b949e] text-sm hover:text-white hover:bg-[#30363d] transition-colors">Retry Quiz</button>`;
  }

  html += `<div id="quiz-result" class="mt-4 ${hasPassed ? '' : 'hidden'}"></div>`;
  html += `</div>`;

  container.innerHTML = html;
  lucide.createIcons();

  // Wire up quiz submit
  const submitBtn = document.getElementById('quiz-submit');
  if (submitBtn) {
    submitBtn.onclick = () => submitQuiz(moduleId, isFinal);
  }

  const retryBtn = document.getElementById('quiz-retry');
  if (retryBtn) {
    retryBtn.onclick = () => {
      delete state.quizScores[moduleId];
      saveProgress();
      renderQuiz(container, moduleId, isFinal);
    };
  }
}

function submitQuiz(moduleId, isFinal) {
  const quiz = QUIZZES[moduleId];
  let correct = 0;
  const wrong = {};

  quiz.questions.forEach((q, qi) => {
    const selected = document.querySelector(`.quiz-option[data-q="${qi}"].selected`);
    const options = document.querySelectorAll(`.quiz-option[data-q="${qi}"]`);

    options.forEach((opt, oi) => {
      opt.classList.add('disabled');
      opt.disabled = true;
      const letter = ['A', 'B', 'C', 'D'][oi];
      if (oi === q.answer) {
        opt.classList.add('correct');
      }
      if (selected && parseInt(selected.dataset.opt) === oi) {
        opt.classList.add('selected');
      }
    });

    if (selected && parseInt(selected.dataset.opt) === q.answer) {
      correct++;
    } else if (selected) {
      selected.classList.add('wrong');
      wrong[qi] = parseInt(selected.dataset.opt);
    }
  });

  const total = quiz.questions.length;
  const score = correct;
  const passed = score / total >= 0.6;

  state.quizScores[moduleId] = { score, total, passed, wrong };
  saveProgress();

  const resultDiv = document.getElementById('quiz-result');
  resultDiv.classList.remove('hidden');
  resultDiv.innerHTML = `
    <div class="p-4 rounded-lg ${passed ? 'bg-[#00ff41]10 border border-[#00ff41]30' : 'bg-[#f85149]10 border border-[#f85149]30'}">
      <div class="flex items-center gap-3">
        <span class="text-2xl">${passed ? '🎉' : '💪'}</span>
        <div>
          <p class="font-bold text-sm ${passed ? 'text-[#00ff41]' : 'text-[#f85149]'}">
            ${passed ? 'Congratulations! You passed!' : 'Keep learning! You can retry.'}
          </p>
          <p class="text-xs text-[#8b949e]">Score: ${score}/${total} (${Math.round((score / total) * 100)}%)</p>
          <p class="text-xs text-[#8b949e]">${passed ? '✅ Module completed!' : '❌ 60% required to pass. Review the module and try again.'}</p>
        </div>
      </div>
      ${!passed ? `<button id="quiz-retry-inline" class="mt-3 px-3 py-1.5 rounded bg-[#21262d] text-[#8b949e] text-xs hover:text-white hover:bg-[#30363d] transition-colors">Retry Quiz</button>` : ''}
    </div>
  `;

  if (!passed) {
    document.getElementById('quiz-retry-inline')?.addEventListener('click', () => {
      delete state.quizScores[moduleId];
      saveProgress();
      renderLesson();
    });
  }

  // Confetti for passing
  if (passed) {
    launchConfetti();
    // Mark quiz as complete
    const mod = COURSE[state.currentModule];
    const lessonId = mod.lessons[state.currentLesson].id;
    state.completedLessons.add(mod.id + '-' + lessonId);
    saveProgress();
    updateProgress();
    renderSidebar();
  }

  document.getElementById('quiz-submit')?.remove();
  updateProgress();
}

// ===== CONFETTI =====
function launchConfetti() {
  const colors = ['#00ff41', '#58a6ff', '#ff7b72', '#d2a8ff', '#ffa657', '#d29922'];
  for (let i = 0; i < 80; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.width = (Math.random() * 6 + 4) + 'px';
    piece.style.height = (Math.random() * 6 + 4) + 'px';
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    piece.style.animationDuration = (Math.random() * 2 + 2) + 's';
    piece.style.animationDelay = (Math.random() * 0.5) + 's';
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 4000);
  }
}

// ===== PROGRESS =====
function markCurrentComplete() {
  const mod = COURSE[state.currentModule];
  const lessonId = mod.lessons[state.currentLesson].id;
  state.completedLessons.add(mod.id + '-' + lessonId);
  saveProgress();
  updateProgress();
  renderSidebar();
}

function updateProgress() {
  let total = 0;
  let done = 0;
  COURSE.forEach((mod) => {
    mod.lessons.forEach((l) => {
      total++;
      if (state.completedLessons.has(mod.id + '-' + l.id)) done++;
    });
  });

  // Also count quiz completion
  Object.keys(state.quizScores).forEach((qid) => {
    if (state.quizScores[qid]?.passed) {
      // Quiz lessons are already counted if marked
    }
  });

  const pct = Math.round((done / total) * 100);
  $('#progress-text').textContent = `${pct}% complete`;
  $('#progress-bar').style.width = pct + '%';
}

function saveProgress() {
  const data = {
    completedLessons: [...state.completedLessons],
    quizScores: state.quizScores,
    currentModule: state.currentModule,
    currentLesson: state.currentLesson,
  };
  try {
    localStorage.setItem('gitpro-progress', JSON.stringify(data));
  } catch (e) { /* ignore */ }
}

function loadProgress() {
  try {
    const raw = localStorage.getItem('gitpro-progress');
    if (raw) {
      const data = JSON.parse(raw);
      state.completedLessons = new Set(data.completedLessons || []);
      state.quizScores = data.quizScores || {};
      state.currentModule = data.currentModule || 0;
      state.currentLesson = data.currentLesson || 0;
    }
  } catch (e) { /* ignore */ }
  updateProgress();
}

// ===== SIDEBAR TOGGLE =====
function toggleSidebar() {
  const sidebar = $('#mobile-sidebar');
  const overlay = $('#sidebar-overlay');
  const isOpen = !sidebar.classList.contains('-translate-x-full');
  if (isOpen) {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
  } else {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
  }
}

// ===== RESET =====
document.addEventListener('DOMContentLoaded', () => {
  // Reset button
  document.getElementById('reset-btn')?.addEventListener('click', () => {
    if (confirm('Reset all progress? This cannot be undone.')) {
      localStorage.removeItem('gitpro-progress');
      state.completedLessons = new Set();
      state.quizScores = {};
      state.currentModule = 0;
      state.currentLesson = 0;
      updateProgress();
      renderSidebar();
      renderLesson();
      lucide.createIcons();
    }
  });

  // Setup terminal listeners (delegated)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const input = e.target;
      if (input.classList.contains('terminal-input')) {
        const container = input.closest('.terminal-window');
        if (container) setupTerminal(container);
        // Re-trigger
        const id = input.id.replace('-input', '');
        const body = document.getElementById(id + '-body');
        const expl = document.getElementById(id + '-explanation');
        const fullCmd = input.value.trim();

        if (!fullCmd) return;

        const inputLine = input.closest('.terminal-input-line');
        const prompt = inputLine?.querySelector('.terminal-prompt')?.textContent || '$';

        // Find commands for this terminal
        let section = null;
        let found = false;
        for (const key in LESSONS) {
          const l = LESSONS[key];
          if (l.type === 'content' && l.sections) {
            for (let si = 0; si < l.sections.length; si++) {
              const s = l.sections[si];
              if (s.type === 'terminal' && id === `terminal-${si}`) {
                section = s;
                found = true;
                break;
              }
            }
          }
          if (found) break;
        }

        // Handle clear
        if (fullCmd.toLowerCase() === 'clear') {
          const iBody = document.getElementById(id + '-body');
          const iExpl = document.getElementById(id + '-explanation');
          if (iBody) {
            const il = iBody.querySelector('.terminal-input-line');
            const first = iBody.querySelector('.terminal-output');
            iBody.innerHTML = '';
            if (first) iBody.appendChild(first.cloneNode(true));
            if (il) iBody.appendChild(il);
          }
          if (iExpl) iExpl.classList.add('hidden');
          input.focus();
          return;
        }

        const cmdDiv = document.createElement('div');
        cmdDiv.className = 'terminal-output';
        cmdDiv.innerHTML = `<span class="terminal-prompt">${prompt}</span> <span class="cmd">${escapeHtml(fullCmd)}</span>`;
        body.insertBefore(cmdDiv, inputLine);

        // Response
        let resp = null;
        if (section?.commands) {
          resp = findMatchingCommand(fullCmd, section.commands);
        }

        const outDiv = document.createElement('div');
        outDiv.className = 'terminal-output';
        if (resp) {
          if (resp.output) {
            outDiv.innerHTML = resp.output.replace(/\n/g, '<br>');
          }
          if (resp.explanation) {
            expl.innerHTML = `<span class="text-[#58a6ff]">→</span> ${resp.explanation}`;
            expl.classList.remove('hidden');
          }
        } else {
          const isGitCmd = fullCmd.startsWith('git ') || fullCmd === 'git' || fullCmd.startsWith('echo') || fullCmd.startsWith('cd ');
          if (isGitCmd) {
            const cmds = section?.commands || {};
            outDiv.innerHTML = `<span class="error">⚠️ Simulated terminal — that git command isn't defined for this lesson.</span><br><span class="dim">Try one of: ${Object.keys(cmds).slice(0, 5).map(c => '<code>' + escapeHtml(c) + '</code>').join(', ')}${Object.keys(cmds).length > 5 ? '…' : ''}</span>`;
          } else {
            outDiv.innerHTML = `<span class="error">Command not recognized: ${escapeHtml(fullCmd)}</span>`;
          }
          expl?.classList.add('hidden');
        }
        body.insertBefore(outDiv, inputLine);

        input.value = '';
        body.scrollTop = body.scrollHeight;
      }
    }
  });

  // Quiz option selection
  document.addEventListener('click', (e) => {
    const opt = e.target.closest('.quiz-option:not(.disabled)');
    if (opt) {
      const qIdx = opt.dataset.q;
      const parent = opt.closest('.quiz-block');
      parent.querySelectorAll('.quiz-option').forEach((o) => o.classList.remove('selected'));
      opt.classList.add('selected');
    }

    // Terminal clear/reset
    const btn = e.target.closest('[data-terminal]');
    if (btn) {
      const id = btn.dataset.terminal;
      const body = document.getElementById(id + '-body');
      const expl = document.getElementById(id + '-explanation');
      const input = document.getElementById(id + '-input');

      if (btn.classList.contains('terminal-clear')) {
        const inputLine = body.querySelector('.terminal-input-line');
        const firstOutput = body.querySelector('.terminal-output');
        body.innerHTML = '';
        if (firstOutput) body.appendChild(firstOutput.cloneNode(true));
        if (inputLine) body.appendChild(inputLine);
        expl?.classList.add('hidden');
        setTimeout(() => input?.focus(), 50);
      }
      if (input) input.focus();
    }
  });

  // Auto-focus terminal inputs on click
  document.addEventListener('click', (e) => {
    const tw = e.target.closest('.terminal-window');
    if (tw) {
      const input = tw.querySelector('.terminal-input');
      if (input && e.target !== input) setTimeout(() => input.focus(), 50);
    }
  });

  // Close mobile sidebar on overlay click
  document.addEventListener('click', (e) => {
    if (e.target.id === 'sidebar-overlay') toggleSidebar();
  });

  // Start the app
  runSplash();
});

// ===== HELPERS =====
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
