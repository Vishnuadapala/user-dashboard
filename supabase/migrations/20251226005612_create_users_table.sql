/*
  # Create users table for User Dashboard

  1. New Tables
    - `users`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text, unique)
      - `phone` (text)
      - `address_street` (text)
      - `address_city` (text)
      - `company_name` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `users` table
    - Add policy to allow anyone to read users
*/

CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text NOT NULL,
  address_street text NOT NULL,
  address_city text NOT NULL,
  company_name text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to users"
  ON users
  FOR SELECT
  TO public
  USING (true);

INSERT INTO users (name, email, phone, address_street, address_city, company_name) VALUES
  ('Leanne Graham', 'Bret@april.biz', '1-770-736-8031', 'Kulas Light', 'Gwenborough', 'Romaguera-Crona'),
  ('Ervin Howell', 'Shanna@melissa.tv', '010-692-6593', 'Victor Plains', 'Wisokyburgh', 'Deckow-Cyst'),
  ('Clementine Bauch', 'Nathan@yesenia.net', '1-463-123-4447', 'Douglas Extension', 'McKenziehaven', 'Romaguera-Jacobson'),
  ('Patricia Lebsack', 'Julianne@ocalhost', '493-170-9800', 'Hoeger Mall', 'South Elvis', 'Robel-Corkery'),
  ('Chelsey Dietrich', 'Lucio_Hettinger@april.com', '(254)954-1289', 'Chico Canyon', 'Roscoeview', 'Keebler LLC'),
  ('Mrs. Dennis Schulist', 'Karley_Dach@jasper.info', '1-477-935-8478', 'Norberto Crossing', 'South Christy', 'Considine-Lockman'),
  ('Kurtis Weissnat', 'Telly.Hoeger@gmail.com', '210.067.6132', 'Rex Trail', 'Howemouth', 'Johns Group'),
  ('Nicholas Runolfsdottir V', 'Sherwood@rosamond.me', '586.493.6943', 'Ellsworth Summit', 'Aliyaview', 'Abernathy Group'),
  ('Glenna Reichel', 'Chaim_McDermott@dana.io', '(775)976-6794', 'Dayna Park', 'Bartholomebury', 'Yost and Sons'),
  ('Clementina DuBuque', 'Rey.Padberg@karina.biz', '024-648-3804', 'Kattie Turnpike', 'New Natiview', 'Baumbach-Smitham');
