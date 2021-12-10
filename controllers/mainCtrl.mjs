export default function initMainCtrl(db) {
  const getMain = async (req, res) => {
    try {
      res.render('main');
    } catch (error){
      console.log(error);
    }
  };

  return {
    getMain,
  };
}