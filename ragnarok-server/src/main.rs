use actix_web::{post, web, App, HttpResponse, HttpServer};
use serde::Deserialize;
use serde::Serialize;

use hmac::{Hmac, Mac};
use jwt::SignWithKey;
use sha2::Sha256;
use std::collections::BTreeMap;
use std::string::String;

// I Post this object from Angular Ragnarok
#[derive(Deserialize, Serialize)]
struct AppState {
    username: String,
    password: String,
    jwt: Option<String>,
}

fn jwtGenerator(username: String) -> String {
    let key: Hmac<Sha256> = Hmac::new_from_slice(b"mySecret").unwrap();
    let mut claims = BTreeMap::new();
    claims.insert("username", username);
    let token_str = claims.sign_with_key(&key).unwrap();
    format!("{}", token_str)
}

#[post("/login")]
async fn login(mut data: web::Json<AppState>) -> HttpResponse {
    println!("Welcome {}!", data.username);
    let username = data.username.to_string();
    data.jwt = Some(String::from(jwtGenerator(username)));
    HttpResponse::Ok().json(data)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().service(login))
        .bind(("127.0.0.1", 8083))?
        .run()
        .await
}
