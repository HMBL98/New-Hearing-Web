class MessagesController < ApplicationController
	before_filter :authenticate_user!
	def create
	    @user = User.find(params[:user_id])
	    @message = @user.messages.create(message_params)
	    redirect_to profile_messages_path
	end
	 
	private
	    def message_params
	      params.require(:message).permit(:message)
	    end
end
