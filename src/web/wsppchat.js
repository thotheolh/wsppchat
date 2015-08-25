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

var connection = new WebSocket('ws://localhost/wspp');

connection.onopen = function () {
};

connection.onerror = function (e) {
};

connection.onmessage = function (e) {
	
};