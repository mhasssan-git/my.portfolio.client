export class experience{
public from:string;
public to:string;
public position:string;
public title:string;
public company:string;
public location:string;
public description:string;

/**
 *
 */
constructor(
      from:string,
      to:string,
      position:string,
      
      company:string,
      location:string,
      description:string="",
      title:string="",

) {
  this.from=from;
  this.to=to,
  this.position=position;
  this.title=title;
  this.company=company;
  this.location=location;
  this.description=description
    
}

}