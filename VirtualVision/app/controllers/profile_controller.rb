class ProfileController < ApplicationController
  before_filter :authenticate_user!

  def messages
     @users = User.find(current_user.id)
  end
  def myaccount

  end
  def show
  	@users = User.all
  end
  def users
  	@q = params[:q]
  	if @q
    	@users = User.where('name LIKE ?',"%#{@q}%")
  	else
    	@users = User.all
   end
   authorize! :users, @users
  end
  def update
    @users = User.find(params[:id])
   
    if @users.update(:role => "administrador")
      redirect_to profile_users_path
    else
      redirect_to profile_users_path
    end
  end


end
