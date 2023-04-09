use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use serde::Deserialize;
use hmac::{Hmac, Mac};
use jwt::SignWithKey;
use sha2::Sha256;
use std::collections::BTreeMap;

// I Post this object from Angular Ragnarok
#[derive(Deserialize)]
struct AppState {
    username: String,
    password: String,
}

#[post("/login")]
async fn login(data: web::Json<AppState>) -> Result<impl Responder> {
    println!("Welcome {}!" ,data.username );
    let key: Hmac<Sha256> = Hmac::new_from_slice(b"ragnarokSecret")?;
    let mut claims = BTreeMap::new();
    claims.insert("sub", "someone");
    let token_str = claims.sign_with_key(&key)?;
    web::Json(data)
}


#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(login)
    }).bind(("127.0.0.1", 8083))?
      .run().await
}
