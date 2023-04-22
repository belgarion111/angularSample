use actix_web::{post, web, App ,  HttpServer, HttpResponse};
use serde::Deserialize;
use serde::Serialize;

use hmac::{Hmac, Mac};
use jwt::VerifyWithKey;
use sha2::Sha256;
use std::collections::BTreeMap;



// I Post this object from Angular Ragnarok
#[derive(Deserialize)]
#[derive(Serialize)]
struct AppState {
    username: String,
    password: String,
    jwt     : Option<String>
}

fn jwtGenerator(username : String ) -> String{
    let key: Hmac<Sha256> = Hmac::new_from_slice(b"mySecret")?;
    let mut claims = BTreeMap::new();
    claims.insert("username", username);
    claims.sign_with_key(&key).unwrap();
}

#[post("/login")]
async fn login(data: web::Json<AppState>)  -> HttpResponse  {
    println!("Welcome {}!" ,data.username );
    HttpResponse::Ok().json(data)
}


#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(login)
    }).bind(("127.0.0.1", 8083))?
      .run().await
}
