export class education{
public from:number;
public to:number;
public degree:string;
public major:string;
public universtiy:string;
public location:string;
public description:string;

/**
 *
 */
constructor(
      from:number,
      to:number,
      degree:string,
      major:string,
      universtiy:string,
      location:string,
      description:string=""

) {
  this.from=from;
  this.to=to,
  this.degree=degree;
  this.major=major;
  this.universtiy=universtiy;
  this.location=location;
  this.description=description
    
}

}