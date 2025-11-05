# 👋 Welcome to the Nerd Bowl!

This is our shared Obsidian vault. We use Git to keep everything in sync.

## How This Works (Important!)

This is **not** a live-syncing service like Google Docs. It's an "asynchronous" collaboration[cite: 735].

The workflow is simple:
1.  **Pull:** Before you start working, "pull" any changes I might have made.
2.  **Work:** Create and edit your notes.
3.  **Commit & Push:** When you're done, you "commit" your changes (creating a save point) and "push" them to GitHub so I can get them.

The **"Obsidian Git"** plugin helps us do this easily from within Obsidian.

## 💻 Desktop Setup (Recommended)

This is the most stable way to contribute.

### 1. Prerequisites
* Install [Obsidian](https://obsidian.md/).
* Install [Git](https://git-scm.com/downloads) for your operating system.

### 2. Clone This Vault
1.  Open your terminal or command line.
2.  Clone this repository to a folder on your computer:
    ```bash
    git clone [https://github.com/rbmr/nerd_bowl.git](https://github.com/rbmr/nerd_bowl.git)
    ```

### 3. Open in Obsidian
1.  In Obsidian, choose **"Open folder as vault"**.
2.  Select the `nerd_bowl` folder you just cloned.
3.  When prompted, **"Trust author"** and enable Community Plugins.

### 4. Install & Configure the Git Plugin
1.  Go to **Settings** > **Community plugins** > **Browse**.
2.  [cite_start]Search for and install **"Git"**[cite: 250].
3.  **Enable** the plugin.

### 5. Set Up Authentication (One-Time)
You need to tell Git how to log in to GitHub. The best way is to use a [Personal Access Token (PAT)](https://github.com/settings/tokens) and a credential helper to store it securely.

1.  Run the correct command for your OS in your terminal to set up the credential helper:
    * [cite_start]**Windows:** `git config --global credential.helper manager` [cite: 17]
    * [cite_start]**macOS:** `git config --global credential.helper osxkeychain` [cite: 5]
    * [cite_start]**Linux:** `git config --global credential.helper libsecret` [cite: 31]
2.  Go back to Obsidian. Open the **Command Palette** (Ctrl+P or Cmd+P).
3.  Type and run the **"Git: Push"** command.
4.  A login window should pop up.
    * **Username:** Your GitHub username
    * **Password:** Your **Personal Access Token (PAT)** (not your regular GitHub password)
5.  [cite_start]After this, you shouldn't have to log in again on this computer[cite: 6, 32].

## 📱 Mobile Setup (Unstable)

[cite_start]**⚠️ Warning:** The Git plugin on mobile is **very unstable**[cite: 170]. [cite_start]It can crash, run forever, or cause errors[cite: 183, 184]. I recommend using this **only for viewing** or making very small changes, if at all.

1.  Create a new, empty vault in Obsidian on your phone.
2.  [cite_start]Install and enable the **"Git"** community plugin[cite: 203].
3.  Go to the **Git plugin settings**.
4.  [cite_start]Under **"Authentication/Commit Author"**, enter your GitHub **Username** and your **Personal Access Token (PAT)** in the password field[cite: 206].
5.  [cite_start]Open the Command Palette and run **"Git: Clone existing remote repo"**[cite: 208].
6.  [cite_start]Enter the clone URL: `https://github.com/rbmr/nerd_bowl.git`[cite: 211].
7.  Follow the prompts. [cite_start]**Do not close Obsidian** until it finishes and asks you to restart[cite: 215].

## ✨ Our Workflow: The "Commit-and-Sync" Command

[cite_start]To make syncing easy, always use the **"Commit-and-sync"** command[cite: 750].

This single command will:
1.  Commit (save) all your local changes.
2.  Pull any new changes from GitHub.
3.  Push your new changes to GitHub.

Just run this command from the Command Palette when you start and finish a session!