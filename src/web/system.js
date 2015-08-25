/*
 * WEB-SECURE PUSH PROTOCOL CHAT (WSPPCHAT).
 * A Secure Push Protocol Chat System.
 *
 * Copyright (C) 2015  Thotheolh
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

/*
 * Derives a keypair from username and password
 */
function derive_keypair(username, password) {
}

/*
 * Begins Secure Channel with Messaging Server.
 * Ephermarel Curve25519 session keys exchanged. Session token derived for session mac and crypt keys.
 * Server sends it's pubkey to identify itself. If no actions till timeout duration, schannel will break.
 */
function begin_schannel(server, port) {
}

/*
 * Login to Messaging Server.
 * Server would encrypt a session challenge and user signs the challenge before successful login.
 */
function login_server(server_pubkey, my_privkey) {
}

/*
 * Register to Messaging Server.
 */
function register_server(my_pubkey) {
}

/*
 * Secure Channel Session Messaging.
 * Sends message to Messaging Server using session crypt and mac key.
 */
function send_schannel(session_key) {
}

/*
 * Secure Channel Session Messaging.
 * Receives message from Messaging Server using session crypt and mac key.
 */
function receive_schannel(session_key) {
}