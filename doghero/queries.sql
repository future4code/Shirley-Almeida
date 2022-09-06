CREATE TABLE IF NOT EXISTS Create_tour (
      id VARCHAR(255) PRIMARY KEY,
      status ENUM("complete" ,"in-progress") DEFAULT "in-progress",
      appointment_data DATETIME NOT NULL,
      price FLOAT NOT NULL,
      duration INT NOT NULL,
      quantity_pets INT NOT NULL DEFAULT 1,
      latitude VARCHAR(255) NOT NULL,
      longitude VARCHAR(255) NOT NULL,
      start_walk FLOAT NOT NULL,
      finish_walk FLOAT NOT NULL
   );