# config valid only for Capistrano 3.1
lock '3.1.0'

set :application, 'website-ember-cli-part'
set :repo_url, 'git@github.com:ember-admin/website-ember-cli-part.git'

#set :branch, 'ember-app-kit'

# Default branch is :master
ask :branch, proc { `git rev-parse --abbrev-ref HEAD`.chomp }

# Default deploy_to directory is /var/www/my_app
#set :deploy_to, '/var/www/my_app'

# Default value for :scm is :git
# set :scm, :git

# Default value for :format is :pretty
# set :format, :pretty

# Default value for :log_level is :debug
# set :log_level, :debug

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# set :linked_files, %w{config/database.yml}

# Default value for linked_dirs is []
set :linked_dirs, %w{node_modules}

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
# set :keep_releases, 5

namespace :deploy do

  desc 'Restart application'
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      upload! "config/deploy/templates/#{fetch(:stage)}.js", "#{release_path}/config/environments/production.js"
      execute "cd #{release_path} && gem install sass"
      execute "cd #{release_path} && bower install"
      execute "cd #{release_path} && npm install"
      execute "cd #{release_path} && ember build --environment production"
      # execute "rm -rf /var/www/magtuner-rails-#{fetch(:stage)}/current/public/dist"
      # execute "ln -s #{release_path}/dist /var/www/magtuner-rails-#{fetch(:stage)}/current/public/dist"
    end
  end

  after :publishing, :restart

  after :restart, :clear_cache do
    on roles(:web), in: :groups, limit: 3, wait: 10 do

    end
  end

end