router.post(
    "/edit",
    isLoggedIn,
    fileUploader.single("image"),
    async (req, res, next) => {
      try {
        const id = req.session.currentUser._id;
  
        const {
          firstName,
          lastName,
          age,
          gender,
          street,
          city,
          postcode,
          state,
          country,
        } = req.body;
  
        const picture = req.file.path;
  
        await User.findByIdAndUpdate(
          id,
          {
            "name.firstName": firstName,
            "name.lastName": lastName,
            age,
            picture,
            gender,
            "addres.street": street,
            "addres.city": city,
            "addres.postcode": postcode,
            "addres.state": state,
            "addres.country": country,
          },
          { new: true }
        );

        res.redirect("/profile");
        
      } catch (error) {
        console.log(error);
      }
    }
  );