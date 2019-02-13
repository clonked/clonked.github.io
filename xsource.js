var clean=1;
var pageName;
var imageName;

function pop( pageName ) {
  popup=open( "popup/" + pageName + ".html", "popup", "width=721,height=600,resizeable=no" );
  clean=0;
}

function poptall( pageName ) {
  popup=open( "popup/" + pageName + ".html", "popup", "width=540,height=712,resizeable=no" );
  clean=0;
}

function popmoney( pageName ) {
  popup=open( "popup/" + pageName + ".html", "popup", "width=500,height=262,resizeable=no" );
  clean=0;
}

function popscan( pageName ) {
  popup=open( "popup/" + pageName + ".html", "popup", "width=700,height=521,resizeable=no" );
  clean=0;
}

function nepalpop( pageName ) {
  popup=open( "nepalpics/" + pageName + ".jpg", "popup", "width=600,height=400,resizeable=no" );
  clean=0;
}

function nepalpoptall( pageName ) {
  popup=open( "nepalpics/" + pageName + ".jpg", "popup", "width=350,height=550,resizeable=no" );
  clean=0;
}

function nepalpoplong( pageName ) {
  popup=open( "nepalpics/" + pageName + ".jpg", "popup", "width=750,height=350,resizeable=no,scrollbars=yes" );
  clean=0;
}

function endpop() {
  if ( clean!=1 && !popup.closed ) {
    popup.close();
  }
}