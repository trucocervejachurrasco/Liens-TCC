-- Update the handle_new_user function to correctly extract metadata
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, name, address, city, zip_code)
  VALUES (
    NEW.id, 
    COALESCE(NEW.raw_user_meta_data ->> 'name', NEW.email),
    NEW.raw_user_meta_data ->> 'address',
    NEW.raw_user_meta_data ->> 'city',
    NEW.raw_user_meta_data ->> 'zip_code'
  );
  RETURN NEW;
END;
$$;