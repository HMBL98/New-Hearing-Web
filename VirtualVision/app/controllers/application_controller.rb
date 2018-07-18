class ApplicationController < ActionController::Base
    # Prevent CSRF attacks by raising an exception.
    # For APIs, you may want to use :null_session instead.
    protect_from_forgery with: :exception

    before_filter :configure_permitted_parameters, if: :devise_controller?
    rescue_from CanCan::AccessDenied do |exception|
     flash[:error] = "Acceso denegado!"
     redirect_to root_url
   end
    protected

        def configure_permitted_parameters
            devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:name,:lastname,:username, :email, :password,:current_password) }
            devise_parameter_sanitizer.for(:account_update) { |u| u.permit(:name,:lastname,:username, :email, :password, :current_password) }
        end
        def after_sign_in_path_for(resource)
            sign_in_url = new_user_session_url
            if request.referer == sign_in_url
              profile_myaccount_path
            else
              stored_location_for(resource) || request.referer || profile_myaccount_path
            end
        end
        def after_sign_out_path_for(resource_or_scope)
            root_path
        end
end