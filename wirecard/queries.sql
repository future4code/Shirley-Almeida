CREATE TABLE IF NOT EXISTS User (
      id_user VARCHAR(255) PRIMARY KEY,
      name_user VARCHAR(100) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      cpf VARCHAR(100) UNIQUE NOT NULL
   );

   CREATE TABLE IF NOT EXISTS Purchase (
      id_buy VARCHAR(255) PRIMARY KEY,
      amount FLOAT NOT NULL,
      buy_type ENUM("credit card", "ticket"),
      id_buy_ref VARCHAR(255), 
      FOREIGN KEY (id_buy_ref) REFERENCES User (id_user)
   );