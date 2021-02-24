class UI{
    constructor(){
        this.profileContainer= document.querySelector('#profileContainer');
        this.alert=document.querySelector('#alert');
    }

    showProfile(profile){
        this.profileContainer.innerHTML=`
            <div class="card card-body">
                <div class="row">
                    <div class="col-md-3">
                        <img src="https://st2.depositphotos.com/4111759/12123/v/950/depositphotos_121233262-stock-illustration-male-default-placeholder-avatar-profile.jpg" style="width:200px; height:250px; margin-left: 60px;" class="img-thumbnail">
                    </div>
                    <div class="col-md-9">
                        <h4>İletişim</h4>
                        <ul class="list-group">
                            <li class="list-group-item">
                                <b>İsim</b>: ${profile.name}
                            </li>
                            <li class="list-group-item">
                                <b>Kullanıcı Adı</b>: ${profile.username}
                            </li>
                            <li class="list-group-item">
                                <b>E-Mail</b>: ${profile.email}
                            </li>
                            <li class="list-group-item">
                                <b>Adres</b>: ${profile.address.street} caddesi
                                ${profile.address.zipcode}
                                ${profile.address.suite}
                                - ${profile.address.city}
                            </li>
                            <li class="list-group-item">
                                <b>Telefon Numarası</b>: ${profile.phone}
                            </li>
                            <li class="list-group-item">
                                <b>Website</b>: ${profile.website}
                            </li>
                            <li class="list-group-item">
                                <b>Şirket</b>: ${profile.company.name}
                            </li>
                        </ul><br><hr>
                        <h4>Yapılacak İşlemler</h4>
                        <ul id="todo" class="list-group">

                        </ul>
                    </div>
                </div>
            </div>
        `;
    }

    showAlert(text){
        this.alert.innerHTML=`<b>${text}</b> bulunamadı.`;
    }

    clear(){
        this.alert.innerHTML=``;
        this.profileContainer.innerHTML="";
    }

    showTodo(todo){
        let html = "";
        todo.forEach(item =>{
            if(item.completed){
                html+=`
                <li class="list-group-item bg-success">
                    ${item.title}
                </li>
                `;
            }
            else{
                html+=`
                <li class="list-group-item bg-secondary">
                    ${item.title}
                </li>
                `;
            }
        });

        this.profileContainer.querySelector('#todo').innerHTML=html;

    }
}