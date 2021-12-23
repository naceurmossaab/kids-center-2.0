<template>
     <div class="signin">
     <h1>Sign In </h1>
     <form >
          <div class="form-group">
               <label for="exampleInputUsername1">Username</label>
               <input type="text" class="form-control" id="exampleInputUsername1" placeholder="Username" required>
          </div>
          <div class="form-group">
               <label for="exampleInputPassword1">Password</label>
               <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required>
          </div>
          <button type="submit" class="btn btn-primary">Sign In</button>
          <small id="signupHelp" class="form-text text-muted">Don't have an account ? <router-link to="/signup"><span>Sign Up</span></router-link> </small>
          <label for="errorSignIn" class="form-text error-form"></label>
     </form>
     </div>
</template>

<script>
export default {
     name : 'SignIn',
     props: { }
}
</script>

<style>
     .signin{
          margin: 5rem 0;
          display:flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
     }
     .signin h1{
          font-weight: 700;
          color: rgb(140, 140, 140);
          margin: 1rem 0;
     }

     form{
          padding: 1rem 2rem;
          background-color: rgb(240, 240, 240);
          width: 500px;
          border-radius: 5px;
          box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.1);
     }

     form *{
          margin: 0.3rem 0;
     }

     form button{
          margin: 0.5rem 1rem 0 0;
          padding: .2rem 1rem;
     }

     form span{
          text-decoration: underline;
          cursor: pointer;
     }

     .error-form{
          display: flex;
          justify-content: center;
          align-items: center;
          color: red;
          font-size: 15px;
          font-weight: 500;
     }
</style>
