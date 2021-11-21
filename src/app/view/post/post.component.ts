import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
    postContent = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo pharetra diam, eget viverra mauris dignissim sed. Donec tincidunt suscipit dapibus. Phasellus sem orci, molestie sit amet gravida a, commodo sed orci. Morbi scelerisque metus ac nibh euismod, et maximus ex ornare. Sed luctus ex ut quam malesuada pharetra. Nulla aliquam mauris risus, a aliquet odio iaculis quis. Aenean dignissim diam nisi, nec ultricies nulla malesuada id. Fusce sed nunc vel ligula venenatis molestie. Sed vitae nibh vel justo fermentum dapibus at laoreet neque.

Nulla facilisi. Duis hendrerit dolor nisi, vel malesuada metus dignissim et. Etiam quam metus, efficitur vitae turpis non, suscipit convallis magna. Vestibulum diam leo, ultricies eu consectetur accumsan, vestibulum non velit. Donec nibh urna, lacinia in urna ac, eleifend ultricies justo. Nunc erat sapien, pulvinar nec egestas vitae, lacinia a nulla. Ut accumsan pharetra lorem. Proin at sem quam. Duis in vehicula nibh, eu facilisis diam.

Aenean sit amet orci vel eros pellentesque tempor bibendum vel justo. Etiam tincidunt, sem eu suscipit tempor, tellus ex pretium purus, eu condimentum quam mauris eu lacus. Phasellus orci neque, egestas non dui quis, fermentum molestie lacus. Donec pellentesque interdum lacus. Nunc tincidunt porta ipsum, a aliquet elit eleifend in. Nullam sit amet pulvinar leo. Suspendisse dapibus eros et mattis tempus.

Donec odio quam, vestibulum nec pulvinar nec, tincidunt a ligula. Mauris neque elit, vestibulum in velit in, mollis dictum odio. Donec eu sollicitudin metus. Sed dictum dolor non eleifend iaculis. Aliquam erat volutpat. Duis dignissim finibus faucibus. Suspendisse vehicula, quam eget vehicula viverra, nisl sem facilisis quam, eu consequat enim neque eu orci. Vestibulum posuere congue ipsum, ac interdum dolor vulputate vel. Cras viverra finibus urna. Integer ut libero tempor, laoreet sem ac, gravida ligula. Fusce at fermentum velit. Donec fringilla a felis at aliquet. Donec quis tortor consequat, finibus velit quis, mollis dolor. Cras accumsan nisl a consectetur rhoncus. Vestibulum vestibulum volutpat nibh non maximus.

Donec tristique, magna eu vestibulum sodales, arcu libero bibendum neque, id sollicitudin tellus enim vitae lectus. Vivamus non luctus nibh, id suscipit enim. Aenean sagittis orci at magna rhoncus feugiat. Aenean aliquet at tellus eget semper. Nam ut sagittis enim. Maecenas ornare neque justo, sed iaculis nisl suscipit nec. Phasellus eros lacus, tempus a sem non, pharetra imperdiet erat. Nulla elit orci, sollicitudin at suscipit nec, semper et ante. Morbi eget diam in nibh volutpat iaculis at quis orci. Sed neque quam, interdum non commodo non, auctor aliquam magna. Maecenas sit amet orci at tellus ornare venenatis a nec orci. Quisque vulputate nulla neque, in consequat enim euismod rhoncus. Nullam mollis quis purus nec consectetur.
    `;

  constructor() { }

  ngOnInit() {
  }

}
