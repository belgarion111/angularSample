use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use serde::Deserialize;

// I Post this object from Angular Ragnarok
#[derive(Deserialize)]
struct AppState {
    username: String,
    password: String,
}

#[post("/login")]
async fn login(data: web::Json<AppState>) -> String {
    println!("Welcome {}!" ,data.username );
    format!("Hello ")
}


#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(login)
    }).bind(("127.0.0.1", 8083))?
      .run().await
}
