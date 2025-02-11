import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent} from "./header/header.component"
import { ContentComponent} from "./content/content.component"
import { FooterComponent} from "./footer/footer.component"
import { BindingComponent} from "./binding/binding.component"
import { DirectiveComponent} from "./directive/directive.component"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ContentComponent, FooterComponent, BindingComponent, DirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
