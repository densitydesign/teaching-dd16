# Hello!
## This is the html template for your DD16 Phase2.
Here is how to work with it.

### Make your copy
Press the green button __code__ and select __Download ZIP__.
![How to make local copy](https://media.giphy.com/media/4IJrlAjQ9dd6T9M3zS/source.gif)

### View it locally
Once you downloaded the template on your machine, you have 3 options to view it locally:

- Use the [atom-live-server plugin](https://atom.io/packages/atom-live-server) of [Atom](https://atom.io/)
- Use the [live preview](https://www.raymondcamden.com/2014/01/15/Brackets-Tip-Using-Live-Preview-as-a-Web-Server) feature of [Brackets](http://brackets.io/). 
- Open the project folder in Terminal and run a [Python Simple Server](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server)

### Folder structure and description

#### How to read the icons
:white_check_mark: → Replace it. //
:hammer: → You can edit and customize it. //
:warning: → Edit very carefully. //
:no_entry_sign: → Don't touch it.


:file_folder: dd16-phase2-template
- :file_folder: assets → The folder containing stylesheets, cover image and logos.
  - :file_folder: css
    - :hammer: `custom.css` → Here you can customize colors, fonts and add new CSS styles.
    - :no_entry_sign: `main.css` → This is the main stylesheet that customizes the whole template. Do not touch it. 
  - :white_check_mark: `cover.png` → The cover in your homepage. Replace it.
  - :no_entry_sign: `logo_poli.png` → Do not touch it.
  - :no_entry_sign: `logo_density.png` → Do not touch it.
  
- :file_folder: question-1 → A sample question folder. Duplicate it to create new pages for your research questions.
  - :white_check_mark: `cover.png`→ The cover of the question page. Replace it.
  - :white_check_mark: `finding.png` → An example of a .png image for showing a relevant finding. Replace it.
  - :white_check_mark: `mid-viz.svg` → An example of a .svg image for showing a relevant finding. Replace it.
  - :white_check_mark: `protocol.png` → An example of a research protocol diagram. Replace it.
  - :white_check_mark: `viz01.png` → An example of the main visualization of the research question. Replace it.
  - :warning: `index.html` → Modify only for updating metadata.
  - :hammer: `question.html` → Here you can add the html content of the research question.
- `gitignore`
- :white_check_mark: `favicon.ico` → You can customise the favicon by replacing it.
- :warning: `index.hthml` → Modify only for updating metadata.
- :hammer: `info.yml` → Here you can add: title, main description, team members. Don't change the file structure. 
- :no_entry_sign: `load-templates.js →`Don’t touch it. This .js file generates the template according to .yml files. 
- :hammer: `questions.yml` → Here you can add information about each research question (title, description  and 
cover for the homepage, the name of the question folder and information about data). !Don't change the file structure!
- :no_entry_sign: `README.md` → The file you are reading right now.


### How to add new research questions
:heavy_exclamation_mark: We suggest you to duplicate research questions step by step.
- Duplicate the sample folder and rename it.
--
![Duplicate the sample folder and rename it.](https://github.com/bea92/dd16-screen/blob/main/question_1.png)
--
- Update the `questions.yml` by specifying the name and the index of the new research question and adding information
--
![Update the yaml file](https://github.com/bea92/dd16-screen/blob/main/question_2.png)

### How to edit authors’ information
- Add your names in the `ìnfo.yml` file.
:heavy_exclamation_mark: Do not change the file structure.
--
![Add your names.](https://github.com/bea92/dd16-screen/blob/main/info.png)


