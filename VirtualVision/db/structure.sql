CREATE TABLE "schema_migrations" ("version" varchar(255) NOT NULL);
CREATE UNIQUE INDEX "unique_schema_migrations" ON "schema_migrations" ("version");
CREATE TABLE "users" ("id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, "email" varchar(255) DEFAULT '' NOT NULL, "encrypted_password" varchar(255) DEFAULT '' NOT NULL, "reset_password_token" varchar(255), "reset_password_sent_at" datetime, "remember_created_at" datetime, "sign_in_count" integer DEFAULT 0 NOT NULL, "current_sign_in_at" datetime, "last_sign_in_at" datetime, "current_sign_in_ip" varchar(255), "last_sign_in_ip" varchar(255), "confirmation_token" varchar(255), "confirmed_at" datetime, "confirmation_sent_at" datetime, "unconfirmed_email" varchar(255), "authentication_token" varchar(255), "created_at" datetime, "updated_at" datetime, "name" varchar(255), "lastname" varchar(255), "username" varchar(255), "role" varchar(255) DEFAULT 'usuario');
CREATE UNIQUE INDEX "index_users_on_email" ON "users" ("email");
CREATE UNIQUE INDEX "index_users_on_reset_password_token" ON "users" ("reset_password_token");
CREATE UNIQUE INDEX "index_users_on_authentication_token" ON "users" ("authentication_token");
CREATE UNIQUE INDEX "index_users_on_confirmation_token" ON "users" ("confirmation_token");
CREATE TABLE "authentications" ("id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, "user_id" integer, "provider" varchar(255), "uid" varchar(255), "token" varchar(255), "token_secret" varchar(255), "created_at" datetime, "updated_at" datetime);
INSERT INTO schema_migrations (version) VALUES ('20151101051636');

INSERT INTO schema_migrations (version) VALUES ('20151101080038');

INSERT INTO schema_migrations (version) VALUES ('20151108020605');

INSERT INTO schema_migrations (version) VALUES ('20151112053901');
