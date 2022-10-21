import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "app-leadership",
  templateUrl: "./leadership.component.html",
  styleUrls: ["./leadership.component.scss"],
})
export class LeadershipComponent implements OnInit {
  modalRef?: BsModalRef;
  config = {
    animated: true,
  };
  leadership = [
    {
      id: 1,
      name: "Amanda Maynard",
      title: "President, STEM",
      experience: 8,
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat ac felis donec et odio pellentesque diam volutpat commodo. Lacus viverra vitae congue eu consequat. Ridiculus mus mauris vitae ultricies leo. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Venenatis cras sed felis eget velit aliquet sagittis id. Risus nec feugiat in fermentum posuere. Vitae congue eu consequat ac felis. Vitae semper quis lectus nulla at volutpat diam ut. Lectus urna duis convallis convallis tellus. Leo vel fringilla est ullamcorper eget nulla facilisi. Tristique senectus et netus et malesuada fames ac. <br/><br/>Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Elementum eu facilisis sed odio morbi. In fermentum et sollicitudin ac. Eget mauris pharetra et ultrices neque ornare aenean euismod. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Neque vitae tempus quam pellentesque nec. Sodales neque sodales ut etiam sit amet nisl purus. Diam in arcu cursus euismod quis viverra. Mauris commodo quis imperdiet massa tincidunt. Nibh praesent tristique magna sit amet purus gravida quis blandit. Habitant morbi tristique senectus et netus et malesuada fames. Ut ornare lectus sit amet est. Pulvinar elementum integer enim neque volutpat. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero nunc consequat interdum varius sit amet. Placerat vestibulum lectus mauris ultrices eros in cursus. Nec nam aliquam sem et tortor. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Sit amet est placerat in egestas erat imperdiet. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Dictum varius duis at consectetur lorem donec massa sapien. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. In vitae turpis massa sed elementum.",
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
    {
      id: 2,
      name: "Samantha Crowley",
      title: "Vice President, STEM",
      experience: 8,
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem. Ut tortor pretium viverra suspendisse. Quis varius quam quisque id diam vel quam elementum. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Eu augue ut lectus arcu. Sed euismod nisi porta lorem mollis. Venenatis cras sed felis eget. Turpis egestas pretium aenean pharetra magna ac placerat. Sit amet cursus sit amet dictum sit amet justo. Nunc sed id semper risus in hendrerit. Sem viverra aliquet eget sit amet tellus cras. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Pharetra massa massa ultricies mi quis hendrerit dolor magna. <br/><br/>Nunc sed blandit libero volutpat sed cras. Purus gravida quis blandit turpis cursus in hac habitasse platea. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Non nisi est sit amet facilisis magna. Mi bibendum neque egestas congue. Amet purus gravida quis blandit turpis cursus in hac. Tincidunt dui ut ornare lectus sit amet est. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. Lobortis mattis aliquam faucibus purus in. Orci a scelerisque purus semper eget duis. In massa tempor nec feugiat. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Nunc scelerisque viverra mauris in aliquam sem. Commodo ullamcorper a lacus vestibulum sed arcu. Eget felis eget nunc lobortis mattis aliquam. In mollis nunc sed id semper. Faucibus nisl tincidunt eget nullam. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Orci dapibus ultrices in iaculis.",
      photo:
        "https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
    },
    {
      id: 3,
      name: "Todd Fletcher",
      title: "Chief Financial Officer",
      experience: 7,
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Aliquam vestibulum morbi blandit cursus risus at. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Maecenas ultricies mi eget mauris pharetra et. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Mauris cursus mattis molestie a iaculis at erat. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Vitae suscipit tellus mauris a diam maecenas sed enim ut.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero nunc consequat interdum varius sit amet. Placerat vestibulum lectus mauris ultrices eros in cursus. Nec nam aliquam sem et tortor. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Sit amet est placerat in egestas erat imperdiet. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Dictum varius duis at consectetur lorem donec massa sapien. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. In vitae turpis massa sed elementum.",
      photo:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
    {
      id: 4,
      name: "Tiffany Edwards",
      title: "Marketing Director",
      experience: 6,
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat pellentesque adipiscing commodo elit. Amet nisl purus in mollis nunc sed. Nascetur ridiculus mus mauris vitae. Nisi lacus sed viverra tellus in hac. Pretium viverra suspendisse potenti nullam ac tortor. Quis blandit turpis cursus in hac. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Bibendum enim facilisis gravida neque convallis. Vivamus arcu felis bibendum ut tristique et. Vulputate odio ut enim blandit volutpat maecenas. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Pellentesque habitant morbi tristique senectus. Nisl tincidunt eget nullam non. Nibh ipsum consequat nisl vel pretium lectus.",
      photo:
        "https://images.unsplash.com/photo-1601931935821-5fbe71157695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
    },
    {
      id: 5,
      name: "Chelsea Clayton",
      title: "Director, Public Relations",
      experience: 5,
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Laoreet id donec ultrices tincidunt arcu non sodales neque. Enim praesent elementum facilisis leo. Pellentesque nec nam aliquam sem. Amet justo donec enim diam vulputate ut pharetra sit. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Sit amet mattis vulputate enim. Praesent tristique magna sit amet purus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam.",
      photo:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
    },
    {
      id: 6,
      name: "Kevin McCallister",
      title: "Art Director",
      experience: 5,
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero nunc consequat interdum varius sit amet. Placerat vestibulum lectus mauris ultrices eros in cursus. Nec nam aliquam sem et tortor. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Sit amet est placerat in egestas erat imperdiet. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Dictum varius duis at consectetur lorem donec massa sapien. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. In vitae turpis massa sed elementum.",
      photo:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
  ];

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
}
