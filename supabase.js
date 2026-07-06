const SUPABASE_URL = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZibWNqbW96b3VvanFnamxweWpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMzMzc2NTIsImV4cCI6MjA5ODkxMzY1Mn0.D50RAqxpye7NF_z_9ODo2s28Nl4TwB1DmcJYxI_2eqs";

const SUPABASE_KEY = "https://vbmcjmozouojqgjlpyjb.supabase.co/rest/v1/";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
