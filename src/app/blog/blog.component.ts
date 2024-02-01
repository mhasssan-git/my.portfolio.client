import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  constructor(private dialog: MatDialog) {}

  // openDialog() {
  //     const dialogConfig = new MatDialogConfig();

  //     dialogConfig.disableClose = false;
  //     dialogConfig.autoFocus = false;

  //     this.dialog.open(BlogDetailsComponent, dialogConfig);
  // }
}
