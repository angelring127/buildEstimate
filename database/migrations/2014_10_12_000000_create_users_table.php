<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id')->comment('ユーザーID');
            $table->string('name')->comment('ユーザー名前');
            $table->string('email')->unique()->comment('ユーザーメール');
            $table->timestamp('email_verified_at')->nullable();
            $table->integer('authority')->comment('ユーザー権限');
            $table->string('password')->comment('パスワード');
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes()->comment('削除状態');
        });

        // テーブルにコメント追加
        DB::statement("ALTER TABLE users comment 'ユーザー情報'");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
