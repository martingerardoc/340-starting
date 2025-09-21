CREATE TABLE classification (
  classification_id SERIAL PRIMARY KEY,
  classification_name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE inventory (
  inv_id SERIAL PRIMARY KEY,
  inv_make VARCHAR(50) NOT NULL,
  inv_model VARCHAR(50) NOT NULL,
  inv_year INT NOT NULL,
  inv_description TEXT NOT NULL,
  inv_image VARCHAR(255) NOT NULL,
  inv_thumbnail VARCHAR(255) NOT NULL,
  inv_price NUMERIC(10,2) NOT NULL,
  inv_miles INT NOT NULL,
  inv_color VARCHAR(20) NOT NULL,
  classification_id INT NOT NULL,
  FOREIGN KEY (classification_id) REFERENCES classification(classification_id)
);

INSERT INTO classification (classification_name)
VALUES ('Sedan'), ('SUV'), ('Truck'), ('Sports');

INSERT INTO inventory (
  inv_make, inv_model, inv_year, inv_description, 
  inv_image, inv_thumbnail, inv_price, inv_miles, inv_color, classification_id
) VALUES (
  'Chevrolet', 'Camaro', 2020, 'A powerful American sports car.',
  '/images/vehicles/camaro.jpg',
  '/images/vehicles/camaro-thumb.jpg',
  35000.00, 12000, 'Red',
  (SELECT classification_id FROM classification WHERE classification_name='Sports')
);

