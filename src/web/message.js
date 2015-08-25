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
 */
 
 /* Receives messages from message box. 
 * Amount of messages indicated from last message from the tip of the unread message stack can be specified. 
 * Setting to 0 for last will receive all messsages. Messages will destruct from mesage box (default: true) after
 * reading.
 */
function receive_messages(last, destroy) {
}

/*
 * Sends message to a known recipient message box in contact list.
 * Recipient_msgkey needs to be manually specified (need to call generate_msgkey command).
 */
function send_message(recipient_pubkey, recipient_msgkey, my_privkey) {
}

/*
 * Receives a list of messages that still exists in the message box.
 * Using from parameter to control the beginning part of the message box list.
 */
function list_existing_message(from) {
}

/*
 * Destroys a message that still exists in the message box via message id.
 */
function destroy_existing_message(id) {
}

/*
 * Destroy all message box existing messages.
 */
function destroy_all_msgs() {
}