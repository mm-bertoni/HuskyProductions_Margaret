import { MongoClient } from "mongodb";
function filmsDB(){
    const me = {};
    //const URI = process.env.MONGODB_URI || "mongodb://localhost:27017";
    const MONGODB_URI = process.env.MONGODB_URI;
    const DB_NAME = "HuskyFilmFest";
    const COLLECTION_NAME = "filmSubmissions";

  const connect = () => {
    // Connect with client
    const client = new MongoClient(MONGODB_URI);
    const films = client.db(DB_NAME).collection(COLLECTION_NAME);
    console.log("Connected with Mongo");
    return { client, films };
  };

  // Get films to load
  me.getFilms = async (query  = {}) => {
    // Connect to db
    const {client, films} = connect();
    try {
      const data = await films.find(query).toArray(); 
      return data; 
    } finally{
      await client.close();
    }
  };

  // Get count of All Films
  me.countFilms = async (query = {}) => {
    // Connect to db
    const {client, films} = connect();
    try {
      const total = films.countDocuments(query); 
      return total;
    } finally{
      await client.close();
    }
  };

  // Add new Film
  me.addFilm = async (newDirector,newTitle, newGenre, newScreener ) => {
    const newEntry = {
      director: newDirector,
      title: newTitle,
      genre: newGenre,
      screener: newScreener,
    };
    // Connect
    const {client, films} = connect();
    try {
      const result = await films.insertOne(newEntry);
      return result; 
    } catch (error){
      console.error("Error adding new submission", error);
    } finally {
      await client.close();
    }

  } ; 

  // Delete Film - deletes one entry
  me.deleteFilm = async(deleteDirector, deleteTitle, deleteGenre, deleteScreener) => {
    // Connect
    const {client, films} = connect();
    // Try to delete 
    try {
      await films.deleteOne({
        title:deleteTitle,
        director:deleteDirector,
        genre:deleteGenre,
        screener:deleteScreener


      });
    } catch (error){
      console.error("Error deleting this film", error);
    } finally {
      await client.close();
    }
  };

  // Update Film Status
  me.updateStatus = async (updateDirector, updateTitle, updateGenre, updateScreener, updateStatus) =>{
    // Connect
    const {client, films} = connect();
    // Filter to the specified entry
    const filter = {
      director:updateDirector,
      title:updateTitle,
      genre: updateGenre,
      screener: updateScreener
    };

    const update = {
      $set: {
        status: updateStatus
      }
    };
    // Update that one entry
    try {
      await films.updateOne(filter, update);
      console.log("Film status was updated");
    } catch (error){
      console.error("Error in updating the status", error);
    } finally {
      await client.close();
    }
    //Close
  };

  return me;
}

const filmsDB = FilmsDB();
export default filmsDB; 
