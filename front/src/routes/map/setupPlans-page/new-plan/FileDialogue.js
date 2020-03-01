import { Component } from 'preact';
import { Text } from 'preact-i18n';

function buildFileSelector(){
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('accept', 'image/png, image/jpeg, image/b64');
    fileSelector.setAttribute('onChange', handleNameFile());
    return fileSelector;
  }

  function handleNameFile()
  {
    let namefile = document.getElementById("browse").files[0].name;
	  console.log(namefile);
	  //document.getElementById("text").innerHTML = namefile;
  }
  
  class FileDialogue extends Component {

    handleFileSelect = (e) => {
        e.preventDefault();
        this.fileSelector.click();
    }

    

    componentDidMount(){
        this.fileSelector = buildFileSelector();
    }
    
    
    
    render(...props){
    return <button id="browse" className="button" onClick={this.handleFileSelect}>{<Text id="map.plans.setupPlans.newPlan.picture.browseButton" />}</button>
    }
  }
  
  export default FileDialogue;